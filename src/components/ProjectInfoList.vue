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
        <router-link :to="{name:'inputprojinfo'}"></router-link>   
    </el-row>

    <p></p>
    <p></p>

<!-- 项目信息详细列表 -->
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe="true"
      height="200"
      border="true"
      >
        <el-table-column
            fixed
            label="项目名称"
            width="100"
            prop="projName">
        </el-table-column>
        <el-table-column
            fixed
            label="子项目"
            width="180"
            prop="subProj">
        </el-table-column>
        <el-table-column
            label="负责人"
            width="80"
            prop="projOwner">
        </el-table-column>
      <el-table-column
        label="开始日期"
        width="120"
        prop="startDate">
      </el-table-column>
        <el-table-column
            label="结束日期"
            width="120"
            prop="finishDate">
        </el-table-column>
        <el-table-column
            label="内编"
            width="60"
            prop="staff">
        </el-table-column>
        <el-table-column
            label="外包"
            width="60"
            prop="outStaff">
        </el-table-column>
        <el-table-column
            label="状态"
            width="50"
            >
            <template slot-scope="scope">
                <el-tag>
                    {{scope.row.status}}
                </el-tag>
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
                    status: 4
                },
                {
                    projName:'快乐平安',
                    subProj: '平台优化',
                    projOwner: '薛欣荣',
                    startDate: '2019-01-01',
                    finishDate: '2019-12-31',
                    staff: 26,
                    outStaff: 0,
                    status: 2
                },
                {
                    projName:'Askbob',
                    subProj: '乐乐助手',
                    projOwner: '陈丽娜',
                    startDate: '2019-08-01',
                    finishDate: '2020-02-28',
                    staff: 6,
                    outStaff: 10,
                    status: 3
                },
                {
                    projName:'Askbob',
                    subProj: '数据平台',
                    projOwner: '彭珺',
                    startDate: '2019-08-01',
                    finishDate: '2019-12-31',
                    staff: 5,
                    outStaff: 3,
                    status: 2
                },
                {
                    projName:'办公升级',
                    subProj: '云投屏',
                    projOwner: '符传明',
                    startDate: '2019-10-08',
                    finishDate: '2019-12-31',
                    staff: 10,
                    outStaff: 9,
                    status: 1
                },
                {
                    projName:'办公升级',
                    subProj: '软电话和音视频融合',
                    projOwner: '汪斌',
                    startDate: '2019-09-01',
                    finishDate: '2019-12-31',
                    staff: 6,
                    outStaff: 3,
                    status: 1
                }
            ],
            message: '快乐平安部门项目信息展示：',
            projTotal: 20,
            projMember: 282
        }
        
      },
        methods: {
            getStatusIcon(status) {
                if( status == 1 ) {
                    return "<i class='el-icon-time'></i>";
                }
            },
            handleInputProjView() {
                let routeDate = this.$router.resolve({
                    name: "InputProjInfo",
                    query:params,
                    params:''
                });
                window.open( routeDate.href,'_blank');
            }
        }

    }

  </script>
</script>