package com.my.blog.website.service.impl;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.stereotype.Component;
@EnableAspectJAutoProxy
@Aspect
@Component
public class AuthorizationService {
    private static final Logger log = LoggerFactory.getLogger(AuthorizationService.class);
    @Pointcut(value = "execution( * com.my.blog.website.controller.*.*.*(..))")
    public void point(){

    }
    @Before(value = "point()")
    public void before(){
        System.out.println("before1");
        System.out.println("before2");
        log.info("------ ------- ---- ---before--- --- -- - -- -- -- -- - - ");
    }
    @AfterReturning(value = "point()")
    public void after(){
        System.out.println("after1");
        System.out.println("after2");
        log.info("---- ---- ---- -----  ---after--- --- -- - -- -- -- -- - - ");
    }
    @Around(value = "point()")
    public void around(ProceedingJoinPoint proceedingJoinPoint){
        try {
            System.out.println("around");
            log.info("---- ---- ---- -----  ---around--- --- -- - -- -- -- -- - - ");
            proceedingJoinPoint.proceed();
        } catch (Throwable throwable) {
            throwable.printStackTrace();
        }finally {
            System.out.println("end");
            log.info("---- ---- ---- -----  ---end--- --- -- - -- -- -- -- - - ");
        }
    }
}
