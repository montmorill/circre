package com.circre.backend.mapper;

import com.circre.backend.entity.Supplier;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SupplierMapper {
    Supplier getSupplierById(Integer id);
    //批量查询供应商
    List<Supplier> getSuppliersByIds(List<Integer> supplierIds);
}
