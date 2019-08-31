  <template>
    <div>

 
    <p style="align=left">{{message}} </p>
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe="true"
      border="true"
      >
      <el-table-column
        label="日期"
        width="180">
        <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{scope.row.date}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="姓名"
        width="180"
        align="center">
        <template slot-scope="scope">
            <el-button >{{scope.row.name}}</el-button>
        </template>
      </el-table-column>
      <el-table-column label="地址">
        <el-table-column
            prop="address"
            label="位置"
            width="180">
        </el-table-column>
        <el-table-column
            prop="zip"
            label="邮编"
            width="180">
        </el-table-column>
      </el-table-column>
    </el-table>
    </div>
  </template>

  <script>
    export default {
        name: 'HelloProjectList',
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: '80001'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
            zip: '80001'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            zip: '80001'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            zip: '80001'
          }],
          message: 'This is a test table view!'
        }
        
      }
    }
  </script>
</script>