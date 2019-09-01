  <template>
    <div>
    <H2 style="align:left">{{message}} </h2>

<!-- 项目信息汇总表 -->
    <el-row>
        <table border="1">
            <tr>
                <td style="align:right">项目总数:</td>
                <td>{{projTotal}}</td>
            </tr>
            <tr>
                <td style="align:right">项目人数：</td>
                <td>{{projMember}}</td>
            </tr>
        </table>
        <el-button @click="handleInputProjView">新增项目</el-button> 
    </el-row>

    <p></p>
    <p></p>

<!-- 项目信息详细列表 -->
    <el-table
      :data="tableData"
      show-summary
      fit
      style="width: 100%"
      stripe="true"

      border="true"
      >
        <el-table-column
            fixed
            sortable
            label="项目名称"
            min-width="100"
            prop="projName">
        </el-table-column>
        <el-table-column
            fixed
            label="子项目"
            min-width="180"
            prop="subProj">
        </el-table-column>
        <el-table-column
            sortable
            label="负责人"
            min-width="80"
            prop="projOwner">
        </el-table-column>
      <el-table-column
        sortable
        label="开始日期"
        min-width="120"
        prop="startDate">
      </el-table-column>
        <el-table-column
            label="结束日期"
            min-width="120"
            prop="finishDate">
        </el-table-column>
        <el-table-column
            sortable
            label="内编"
            min-width="60"
            prop="staff">
        </el-table-column>
        <el-table-column
            sortable
            label="外包"
            min-width="60"
            prop="outStaff">
        </el-table-column>
        <el-table-column
            sortable
            label="状态"
            min-width="50"
            >
            <template slot-scope="scope">
                <el-tag>
                    {{scope.row.status}}
                </el-tag>
            </template>
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            min-width="100">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button @click="handleEditProj(scope.$index, scope.row.projName, scope.row.subProj )" type="text" size="small">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
    </div>
  </template>

  <script>
    export default {
        name: 'ProjectInfoList',
      data() {
        return {
            tableData: [
                {
                    projName:'快乐平安',
                    subProj: 'App功能迭代',
                    projOwner: '黄晓宇',
                    startDate: '2019-01-01',
                    finishDate: '2019-12-31',
                    staff: 20,
                    outStaff: 12,
                    status: 4,
                    memo: ''
                },
                {
                    projName:'快乐平安',
                    subProj: '平台优化',
                    projOwner: '薛欣荣',
                    startDate: '2019-01-01',
                    finishDate: '2019-12-31',
                    staff: 26,
                    outStaff: 0,
                    status: 2,
                    memo: ''
                },
                {
                    projName:'Askbob',
                    subProj: '乐乐助手',
                    projOwner: '陈丽娜',
                    startDate: '2019-08-01',
                    finishDate: '2020-02-28',
                    staff: 6,
                    outStaff: 10,
                    status: 3,
                    memo: ''
                },
                {
                     projName:'Askbob',
                    subProj: '数据平台',
                    projOwner: '彭珺',
                    startDate: '2019-08-01',
                    finishDate: '2019-12-31',
                    staff: 5,
                    outStaff: 3,
                    status: 2,
                    memo: ''
                },
                {
                    projName:'办公升级',
                    subProj: '云投屏',
                    projOwner: '符传明',
                    startDate: '2019-10-08',
                    finishDate: '2019-12-31',
                    staff: 10,
                    outStaff: 9,
                    status: 1,
                    memo: ''
                },
                {
                    projName:'办公升级',
                    subProj: '软电话和音视频融合',
                    projOwner: '汪斌',
                    startDate: '2019-09-01',
                    finishDate: '2019-12-31',
                    staff: 6,
                    outStaff: 3,
                    status: 1,
                    memo: ''
                }
            ],
            message: '快乐平安部门项目信息展示：',
            projTotal: 20,
            projMember: 282
        }
        
      },
        methods: {
            created() {
                this.axios.get('/findall').then((response)=>{
                    console.log(response.data)
                }).catch((response)=>{
                    console.log(response)
                })
            },
            getStatusIcon(status) {
                if( status == 1 ) {
                    return "<i class='el-icon-time'></i>";
                }
            },
            handleInputProjView() {
                /*
                    this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        });          
                    });
                    */
                this.$router.push('/InputProjInfo');
            },
            handleEditProj( index, name, sub ) {
                var str = name + sub ;
                this.$message({
                                type: 'info',
                                message: str
                            });
            }
        }

    }

  </script>
</script>