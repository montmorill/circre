package com.circre.backend.service.impl;

import com.circre.backend.entity.Material;
import com.circre.backend.entity.Result;
import com.circre.backend.mapper.MaterialMapper;
import com.circre.backend.service.MaterialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * {@code @BelongsProject:}be
 * {@code @BelongsPackage:}com.circre.backend.service.impl
 * {@code @Author:} Xukai
 * {@code @CreateTime:}2025-07-26  11:01
 * {@code @Description:}TODO
 * {@code @Version:}1.0
 */
@Service
public class MaterialServiceImpl implements MaterialService {
    @Autowired
    private MaterialMapper materialMapper;
    //根据id查询材料信息
    public Material getMaterialById(Integer id) {
        return materialMapper.getMaterialById(id);
    }

    public List<Material> getMaterialByType(String type) {
        return materialMapper.getMaterialByType(type);
    }
}
