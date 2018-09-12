package com.my.blog.website.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.my.blog.website.dao.MediaVoMapper;
import com.my.blog.website.modal.Vo.MediaVo;
import com.my.blog.website.service.IMediaService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2018/9/10.
 */
@Service
public class MediaServiceImpl implements IMediaService{
    private static final Logger LOGGER = LoggerFactory.getLogger(MediaServiceImpl.class);
    @Resource
    private MediaVoMapper mediaVoMapper;
    @Override
    public PageInfo<MediaVo> getMediaList(Integer contentId,Integer page, Integer limit) {
        int total=mediaVoMapper.count(contentId);
        PageHelper.startPage(page, limit);
        List<MediaVo> list=mediaVoMapper.getMediaList(contentId);
        PageInfo<MediaVo> paginator=new PageInfo<>(list);
        paginator.setTotal(total);
        return paginator;
    }

    @Override
    public List<MediaVo> ListById(Integer contentId) {
        return mediaVoMapper.getMediaList(contentId);
    }

    @Override
    public void save(MediaVo mediaVo) {
        mediaVoMapper.insertMedia(mediaVo);
    }

    @Override
    public MediaVo selectById(Integer id) {
        MediaVo mediaVo=mediaVoMapper.getMedia(id);
        return mediaVo;
    }

    @Override
    public void deleteById(Integer id) {
        mediaVoMapper.deleteMedia(id);
    }
}
