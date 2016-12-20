<template>
    <div>
        <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" :router="true">
            <el-menu-item index="1" :route="{path: '/'}">主页</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1" :route="{path: '/one'}">选项1</el-menu-item>
                <el-menu-item index="2-2" :route="{path: '/two'}">选项2</el-menu-item>
                <el-menu-item index="2-3" :route="{path: '/three'}">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3" :route="{path: '/order'}">订单管理</el-menu-item>
            <el-menu-item index="4" :route="{path: '/stock'}">库存管理</el-menu-item>
        </el-menu>
    </div>
</template>
<script>
    import {Menu} from 'element-ui'
    export default {
        name : 'menu',
        components:{
            'elMenu': Menu
        }
    }
</script>