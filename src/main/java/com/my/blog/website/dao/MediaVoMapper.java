package com.my.blog.website.dao;

import com.my.blog.website.modal.Vo.AttachVo;
import com.my.blog.website.modal.Vo.MediaVo;
import java.util.List;
import java.util.Map;

public interface MediaVoMapper {


    int deleteByPrimaryKey(Integer id);

    int insert(MediaVo record);

    int insertSelective(MediaVo record);

    List<MediaVo>  selectBy(Map params);

    AttachVo selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(MediaVo record);

    int updateByPrimaryKey(MediaVo record);
}
