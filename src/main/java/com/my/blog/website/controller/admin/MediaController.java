package com.my.blog.website.controller.admin;

import com.github.pagehelper.PageInfo;
import com.my.blog.website.controller.BaseController;
import com.my.blog.website.modal.Bo.RestResponseBo;
import com.my.blog.website.modal.Message;
import com.my.blog.website.modal.Vo.MediaVo;
import com.my.blog.website.modal.Vo.UserVo;
import com.my.blog.website.service.IMediaService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;

@Controller
@RequestMapping("/admin/media")
public class MediaController extends BaseController {
    private static final Logger LOGGER = LoggerFactory.getLogger(MediaController.class);
    @Resource
    private IMediaService iMediaService;
    @PostMapping(value = "/save")
    @ResponseBody
    public RestResponseBo save(MediaVo mediaVo ,HttpServletRequest request){
        try {
            UserVo users = this.user(request);
            mediaVo.setCreate_by(users.getUid());
            mediaVo.setCreated_date(new Date());
            iMediaService.save(mediaVo);
        } catch (Exception e) {
            String msg="保存失败";
            return RestResponseBo.fail(msg);
        }
        return RestResponseBo.ok();
    }

    @GetMapping(value = "")
    public String serach(@RequestParam(value = "page", defaultValue = "1") int page,
                          @RequestParam(value = "limit", defaultValue = "15") int limit,
                          @RequestParam(value = "contentId", defaultValue = "0") int contentId,
                          HttpServletRequest request){
        PageInfo<MediaVo> pages=iMediaService.getMediaList(contentId,page,limit);
        request.setAttribute("mediaList",pages);
        return "admin/media";
    }
    @RequestMapping(value = "/remove")
    @ResponseBody
    public RestResponseBo delete(@RequestParam int id){
        try {
            iMediaService.deleteById(id);
        } catch (Exception e) {
            String msg="删除多媒体失败！";
            return RestResponseBo.fail(msg);
        }
        return RestResponseBo.ok();
    }
    @GetMapping(value = "/{id}")
    public String getMedia(@PathVariable Integer id, HttpServletRequest request){
        MediaVo mediaVo=iMediaService.selectById(id);
        request.setAttribute("media",mediaVo);
        return "admin/media_edit";
    }
}
