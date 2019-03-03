package com.my.blog.website.utils;

public class LanguageUtils {
    public static String getLanguage(String lang){
        String language=null;
        if(lang.equals("en_US")){
            language="en";
        }else if(lang.equals("zh_CN")){
            language="cn";
        }
        return language;
    }
}
