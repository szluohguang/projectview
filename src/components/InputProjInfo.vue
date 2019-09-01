<template>
    <div>
        <!-- 输入项目信息 -->
        
        <el-form ref="form" :model="projInfo" status-icon :rules="rules" label-width="120px">
            <el-form-item label="项目名称：">
                <el-input v-model="projInfo.projName"></el-input>
            </el-form-item>
            <el-form-item label="子项目：">
                <el-input v-model="projInfo.subProj"></el-input>
            </el-form-item>
            <el-form-item label="负责人：">
                <el-input v-model="projInfo.projOwner"></el-input>
            </el-form-item>
            <el-form-item label="项目时间">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="开始时间"
                        v-model="projInfo.startDate" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="结束时间" 
                        v-model="projInfo.finishDate" style="width: 100%;"></el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="内编：">
                <el-input v-model="projInfo.staff"></el-input>
            </el-form-item>
            <el-form-item label="外包：">
                <el-input v-model="projInfo.outStaff"></el-input>
            </el-form-item>
            <el-form-item label="项目状态">
                <el-radio-group v-model="projInfo.projStatus">
                <el-radio label="未开始"></el-radio>
                <el-radio label="正常"></el-radio>
                <el-radio label="延期"></el-radio>
                <el-radio label="结束"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="备注">
                <el-input type="textarea" v-model="projInfo.memo"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit('projInfo')">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>


<script>
    export default {
        name: 'InputProjInfo',
        data() {
            var checkInput = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('不能为空'));
                }
            };
            var checkInputNumber = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('不能为空'));
                }
                setTimeout(() => {
                        if (!Number.isInteger(value)) {
                            callback(new Error('请输入数字值'));
                        } else {
                            callback();
                        }
                    }, 1000);
            };
            return {
                projInfo: {
                    projName: '',
                    subProj: '',
                    projOwner: '',
                    startDate: '',
                    finishDate: '',
                    staff: '',
                    outStaff: '',
                    projStatus: '',
                    projMemo: ''
                },
                rules: {
                    projName: [
                        { validator: checkInput, trigger: 'blur' }
                    ],
                    subProj: [
                        { validator: checkInput, trigger: 'blur' }
                    ],
                    projOwner: [
                        { validator: checkInput, trigger: 'blur' }
                    ],
                    staff: [
                        { validator: checkInputNumber, trigger: 'blur' }
                    ],
                    outStaff: [
                        { validator: checkInputNumber, trigger: 'blur' }
                    ]
                }
            };

        },
        methods: {
            onSubmit( info ) {
                var that = this;
/*
                var msg = that.projInfo.projName;
                console.log( msg );
                this.$alert( msg, '标题名称', {
                confirmButtonText: '确定',
                callback: action => {
                    this.$message({
                    type: 'info',
                    message: `action: ${ action }`
                    });
                }
                });
*/
                var infomessage = that.projInfo.projName;
                var typestr ='success';
                if( infomessage == "" ) {
                    infomessage = "没有输入项目名称";
                    typestr ='error';
                    this.$alert( infomessage, '项目信息', {
                    confirmButtonText: '确定',
                    type: typestr
                });
                }
                else {
                    infomessage = that.projInfo.projName + that.projInfo.subProj + that.projInfo.projOwner + that.projInfo.startDate + that.projInfo.finishDate + that.projInfo.staff + that.projInfo.outStaff + that.projInfo.projStatus;
                    typestr ='success';
                    
                    this.$alert( infomessage, '项目信息', {
                        confirmButtonText: '确定',
                        type: typestr,
                        callback: action => {
                            this.$message({
                                type: 'info',
                                message: `保持成功!`
                            });
                        }
                    });
                }
                

            }
        }
    }
</script>