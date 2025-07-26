package com.circre.backend.mapper;

import com.circre.backend.entity.Material;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MaterialMapper {
    Material getMaterialById(Integer id);
    //批量查询材料
    List<Material> getMaterialsByIds(List<Integer> materialIds);
    //根据类型查询材料
    List<Material> getMaterialByType(String type);
}
