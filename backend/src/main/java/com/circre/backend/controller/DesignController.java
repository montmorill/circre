package com.circre.backend.controller;

import com.circre.backend.entity.Designer;
import com.circre.backend.entity.DesignerVO;
import com.circre.backend.entity.Result;
import com.circre.backend.service.DesignerService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

/**
 * {@code @BelongsProject:}be
 * {@code @BelongsPackage:}com.circre.backend.controller
 * {@code @Author:} Xukai
 * {@code @CreateTime:}2025-07-26  09:21
 * {@code @Description:}TODO
 * {@code @Version:}1.0
 */
@RestController
@RequestMapping("/designer")
@Slf4j
public class DesignController {

    @Autowired
    private DesignerService designerService;

    //根据id查询设计师
    @GetMapping("/{id}")
    public Result<Designer> getDesignerById(@PathVariable("id") Integer id) {
        log.info("根据id查询设计师");
        return Result.success(designerService.getDesignerById(id));
    }

    //实现设计师注册
    @PostMapping("/register")
    public Result register(
            @RequestBody DesignerVO designerVO,
            @RequestPart(required = false) MultipartFile avatarFile) {
        log.info("设计师注册:" + designerVO.getName());
        designerService.register(designerVO,avatarFile);
        return Result.success();
    }
}
