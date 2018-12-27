package com.my.blog.website.modal.Vo;
import java.io.Serializable;
import java.util.Date;

public class MediaVo implements Serializable {
    private Integer id;
    private Integer contentId;
    private String mediaUrl;
    private String mediaType;
    private Date created_date;
    private Integer create_by;
    private String mediaImageUrl;
    private String mediaDescribe;
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getContentId() {
        return contentId;
    }

    public void setContentId(Integer contentId) {
        this.contentId = contentId;
    }

    public String getMediaUrl() {
        return mediaUrl;
    }

    public void setMediaUrl(String mediaUrl) {
        this.mediaUrl = mediaUrl;
    }

    public String getMediaType() {
        return mediaType;
    }

    public void setMediaType(String mediaType) {
        this.mediaType = mediaType;
    }

    public Date getCreated_date() {
        return created_date;
    }

    public void setCreated_date(Date created_date) {
        this.created_date = created_date;
    }

    public Integer getCreate_by() {
        return create_by;
    }

    public void setCreate_by(Integer create_by) {
        this.create_by = create_by;
    }
    public String getMediaImageUrl() {
        return mediaImageUrl;
    }

    public void setMediaImageUrl(String mediaImageUrl) {
        this.mediaImageUrl = mediaImageUrl;
    }

    public String getMediaDescribe() {
        return mediaDescribe;
    }

    public void setMediaDescribe(String mediaDescribe) {
        this.mediaDescribe = mediaDescribe;
    }
}
