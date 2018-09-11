package com.my.blog.website.service;

import com.github.pagehelper.PageInfo;
import com.my.blog.website.modal.Vo.MediaVo;

import java.util.Map;

/**
 * Created by Administrator on 2018/9/10.
 */
public interface IMediaService {
    /**
     * 分页查询媒体资源
     * @param page
     * @param limit
     * @return
     */
    PageInfo<MediaVo> getMediaList(Integer contentId,Integer page, Integer limit);

    /**
     * 保存媒体资源
     *
     * @param mediaVo

     */
    void save(MediaVo mediaVo);

    /**
     * 根据媒体资源id查询媒体资源
     * @param id
     * @return
     */
    MediaVo selectById(Integer id);

    /**
     * 删除媒体资源
     * @param id
     */
    void deleteById(Integer id);


}
