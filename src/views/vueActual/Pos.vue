<template>
    <div class="pos app-container">
        <p class="warn-content">
            <a href="https://github.com/shenghy/AwesomePOS/" target="_blank">crud参考技术胖
            </a>
        </p>
        <div>
            <el-row>
                <el-col :span="7" class="pos-order" id="order-list">

                    <el-tabs>
                        <el-tab-pane label="点餐">
                            <el-table :data="tableData" border style="width: 100%">

                                <el-table-column prop="goodsName" label="商品"></el-table-column>
                                <el-table-column prop="count" label="量" width="50"></el-table-column>
                                <el-table-column prop="price" label="金额" width="70"></el-table-column>
                                <el-table-column label="操作" width="100" fixed="right">
                                    <template slot-scope="scope">
                                        <el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
                                        <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>

                                    </template>
                                </el-table-column>
                            </el-table>

                            <div class="totalDiv">
                                <small>数量：</small>
                                <strong>{{totalCount}}</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                                <small>总计：</small>
                                <strong>{{totalMoney}}</strong> 元
                            </div>

                            <div class="order-btn">

                                <el-button type="warning">挂单</el-button>
                                <el-button type="danger" @click="delAllGoods()">删除</el-button>
                                <el-button type="success" @click="checkout()"> 结账</el-button>

                            </div>
                        </el-tab-pane>

                        <el-tab-pane label="挂单">
                            挂单
                        </el-tab-pane>
                        <el-tab-pane label="外卖">
                            外卖
                        </el-tab-pane>

                    </el-tabs>

                </el-col>

                <!--商品展示-->
                <el-col :span="17">
                    <div class="often-goods">
                        <div class="title">常用商品</div>
                        <div class="often-goods-list">

                            <ul>
                                <li v-for="goods in oftenGoods" @click="addOrderList(goods)">
                                    <span>{{goods.goodsName}}</span>
                                    <span class="o-price">￥{{goods.price}}元</span>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div class="goods-type">

                        <el-tabs>
                            <el-tab-pane label="汉堡">1
                                <ul class='cookList'>

                                    <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                                        <span class="foodImg">
                                            <img :src="goods.goodsImg" width="100%">
                                        </span>
                                        <span class="foodName">{{goods.goodsName}}</span>
                                        <span class="foodPrice">￥{{goods.price}}元</span>
                                    </li>

                                </ul>
                            </el-tab-pane>
                            <el-tab-pane label="小食">
                                <ul class='cookList'>
                                    <li v-for="goods in type1Goods" @click="addOrderList(goods)">
                                        <span class="foodImg">
                                            <img :src="goods.goodsImg" width="100%">
                                        </span>
                                        <span class="foodName">{{goods.goodsName}}</span>
                                        <span class="foodPrice">￥{{goods.price}}元</span>
                                    </li>
                                </ul>
                            </el-tab-pane>
                            <el-tab-pane label="饮料">
                                <ul class='cookList'>
                                    <li v-for="goods in type2Goods" @click="addOrderList(goods)">
                                        <span class="foodImg">
                                            <img :src="goods.goodsImg" width="100%">
                                        </span>
                                        <span class="foodName">{{goods.goodsName}}</span>
                                        <span class="foodPrice">￥{{goods.price}}元</span>
                                    </li>
                                </ul>
                            </el-tab-pane>
                            <el-tab-pane label="套餐">
                                <ul class='cookList'>
                                    <li v-for="goods in type3Goods" @click="addOrderList(goods)">
                                        <span class="foodImg">
                                            <img :src="goods.goodsImg" width="100%">
                                        </span>
                                        <span class="foodName">{{goods.goodsName}}</span>
                                        <span class="foodPrice">￥{{goods.price}}元</span>
                                    </li>
                                </ul>
                            </el-tab-pane>

                        </el-tabs>
                    </div>

                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'Pos',
  //   mounted: function() {
  //     var orderHeight = document.body.clientHeight
  //     document.getElementById('order-list').style.height = orderHeight + 'px'
  //   },
  created() {
    // 读取常用商品列表
    // axios
    //   .get('http://jspang.com/DemoApi/oftenGoods.php')
    //   .then(response => {
    //     // console.log(response);
    //     this.oftenGoods = response.data
    //   })
    //   .catch(error => {
    //     console.log(error)
    //     alert('网络错误，不能访问')
    //   })
    // // 读取分类商品列表
    // axios
    //   .get('http://jspang.com/DemoApi/typeGoods.php')
    //   .then(response => {
    //     // console.log(response);
    //     // this.oftenGoods=response.data;
    //     this.type0Goods = response.data[0]
    //     this.type1Goods = response.data[1]
    //     this.type2Goods = response.data[2]
    //     this.type3Goods = response.data[3]
    //   })
    //   .catch(error => {
    //     console.log(error)
    //     alert('网络错误，不能访问')
    //   })
  },
  data() {
    return {
      tableData: [], // 订单列表的值
      oftenGoods: [
        {
          'goodsId': 1,
          'goodsName': '香辣鸡腿堡',
          'price': 18
        }, {
          'goodsId': 2,
          'goodsName': '田园鸡腿堡',
          'price': 15
        }, {
          'goodsId': 3,
          'goodsName': '和风汉堡',
          'price': 15
        }, {
          'goodsId': 4,
          'goodsName': '大包薯条',
          'price': 18
        }, {
          'goodsId': 5,
          'goodsName': '脆皮炸鸡腿',
          'price': 20
        }, {
          'goodsId': 6,
          'goodsName': '魔法鸡块',
          'price': 20
        }, {
          'goodsId': 7,
          'goodsName': '可乐大杯',
          'price': 10
        }, {
          'goodsId': 8,
          'goodsName': '雪顶咖啡',
          'price': 18
        }, {
          'goodsId': 9,
          'goodsName': '儿童欢乐套餐',
          'price': 25
        }, {
          'goodsId': 10,
          'goodsName': '快乐全家桶',
          'price': 99
        }

      ],
      type0Goods: [
        {
          'goodsId': 1,
          'goodsImg': 'http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg',
          'goodsName': '香辣鸡腿堡',
          'price': 18
        },
        {
          'goodsId': 2,
          'goodsImg': 'http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg',
          'goodsName': '田园鸡腿堡',
          'price': 15
        },
        {
          'goodsId': 3,
          'goodsImg': 'http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg',
          'goodsName': '和风汉堡',
          'price': 15
        }
      ],
      type1Goods: [{
        'goodsId': 4,
        'goodsImg': 'http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg',
        'goodsName': '大包薯条',
        'price': 18
      },
      {
        'goodsId': 5,
        'goodsImg': 'http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg',
        'goodsName': '脆皮炸鸡腿',
        'price': 20
      },
      {
        'goodsId': 6,
        'goodsImg': 'http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg',
        'goodsName': '魔法鸡块',
        'price': 20
      }],
      type2Goods: [{
        'goodsId': 7,
        'goodsImg': 'http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg',
        'goodsName': '可乐大杯',
        'price': 10
      },
      {
        'goodsId': 8,
        'goodsImg': 'http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg',
        'goodsName': '雪顶咖啡',
        'price': 18
      }],
      type3Goods: [{
        'goodsId': 9,
        'goodsImg': 'http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg',
        'goodsName': '儿童欢乐套餐',
        'price': 25
      },
      {
        'goodsId': 10,
        'goodsImg': 'http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg',
        'goodsName': '快乐全家桶',
        'price': 99
      }],
      totalMoney: 0, // 订单总价格
      totalCount: 0 // 订单商品总数量
    }
  },
  methods: {
    // 添加订单列表的方法
    addOrderList(goods) {
      // console.log(goods);
      this.totalCount = 0 // 汇总数量清0
      this.totalMoney = 0
      let isHave = false
      // 判断是否这个商品已经存在于订单列表
      for (let i = 0; i < this.tableData.length; i++) {
        console.log(this.tableData[i].goodsId)
        if (this.tableData[i].goodsId === goods.goodsId) {
          isHave = true // 存在
        }
      }
      // 根据isHave的值判断订单列表中是否已经有此商品
      if (isHave) {
        // 存在就进行数量添加
        const arr = this.tableData.filter(o => o.goodsId === goods.goodsId)
        arr[0].count++
        // console.log(arr);
      } else {
        // 不存在就推入数组
        const newGoods = {
          goodsId: goods.goodsId,
          goodsName: goods.goodsName,
          price: goods.price,
          count: 1
        }
        this.tableData.push(newGoods)
      }

      this.getAllMoney()
    },
    // 删除单个商品
    delSingleGoods(goods) {
      console.log(goods)
      this.tableData = this.tableData.filter(o => o.goodsId !== goods.goodsId)
      this.getAllMoney()
    },
    // 删除所有商品
    delAllGoods() {
      this.tableData = []
      this.totalCount = 0
      this.totalMoney = 0
    },
    // 汇总数量和金额
    getAllMoney() {
      this.totalCount = 0
      this.totalMoney = 0
      if (this.tableData) {
        this.tableData.forEach(element => {
          this.totalCount += element.count
          this.totalMoney = this.totalMoney + element.price * element.count
        })
      }
    },
    // 结账方法模拟
    checkout() {
      if (this.totalCount !== 0) {
        this.tableData = []
        this.totalCount = 0
        this.totalMoney = 0
        this.$message({
          message: '结账成功，感谢你又为店里出了一份力!',
          type: 'success'
        })
      } else {
        this.$message.error('不能空结。老板了解你急切的心情！')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pos {
  font-size: 12px;
}
#order-list {
  height: 800px;
}
.pos-order {
  background-color: #f9fafc;
  /* border-right: 10px solid #C0CCDA; */
  padding-right: 20px;
}

.order-btn {
  margin-top: 10px;
  text-align: center;
}

.title {
  height: 20px;
  border-bottom: 1px solid #d3dce6;
  background-color: #f9fafc;
  padding: 20px;
}

.often-goods-list ul li {
  list-style: none;
  float: left;
  border: 1px solid #e5e9f2;
  padding: 20px;
  margin: 5px;
  background-color: #fff;
  cursor: pointer;
}

.goods-type {
  clear: both;
  padding: 20px;
}

.o-price {
  color: #58b7ff;
}

.often-goods-list {
  border-bottom: 1px solid #c0ccda;
  height: auto;
  overflow: hidden;
  padding-bottom: 10px;
  background-color: #f9fafc;
}

.cookList li {
  list-style: none;
  width: 23%;
  border: 1px solid #e5e9f2;
  height: auot;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 2px;
  cursor: pointer;
}

.cookList li span {
  display: block;
  float: left;
}

.foodImg {
  width: 40%;
}

.foodName {
  font-size: 18px;
  padding-left: 10px;
  color: brown;
}

.foodPrice {
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}

.totalDiv {
  height: auot;
  overflow: hidden;
  text-align: right;
  font-size: 16px;
  background-color: #fff;
  border-bottom: 1px solid #e5e9f2;
  padding: 10px;
}
</style>
