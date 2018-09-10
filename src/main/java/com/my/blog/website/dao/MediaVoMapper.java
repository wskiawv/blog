package com.my.blog.website.dao;

import com.my.blog.website.modal.Vo.MediaVo;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;
@Component
public interface MediaVoMapper {
    int deleteMedia(Integer id);
    int insertMedia(Map params);
    List<MediaVo>  getMediaList(Integer contentId);
    MediaVo getMedia(Integer id);
    Integer count(Integer contentId);
}
