package com.smanyaa.springbootdemo.controller;
 
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Configuration
@Controller
public class DemoController {
 
    @RequestMapping("")
    public String demo() {
        System.out.println("进入controller中的demo方法！");
        /*注意：这里返回值有后缀名，如何省略后缀名后面有介绍*/
        return "index.html";
    }
}