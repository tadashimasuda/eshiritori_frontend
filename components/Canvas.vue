<template>
<div>
  <canvas id="canvas" ref="canvas" v-on:mousedown="MouseDown" v-on:mouseup="MouseUp" v-on:mousemove="MouseMove" width="360px" height="180px" style="border: solid 1px #000;box-sizing: border-box;"></canvas>
  <div id="option">
    <div id="color_option">
      <button type="button" class="btn rounded-circle p-0 black" style="width:3rem;height:3rem;" @click.prevent='cnvColor ="0, 0,0, 1"'></button>
      <button type="button" class="btn rounded-circle p-0 red" style="width:3rem;height:3rem;" @click.prevent='cnvColor ="255, 0, 0, 1"'></button>
      <button type="button" class="btn rounded-circle p-0 green" style="width:3rem;height:3rem;" @click.prevent='cnvColor ="0, 180, 0, 1"'></button>
      <button type="button" class="btn rounded-circle p-0 yellow" style="width:3rem;height:3rem;" @click.prevent='cnvColor ="255, 255, 0, 1"'></button>
      <button type="button" class="btn rounded-circle p-0 blue" style="width:3rem;height:3rem;" @click.prevent='cnvColor ="0, 0,255, 1"'></button>
    </div>
    <div id="bold_option">
      <button type="button" class="small btn rounded-0 border" style="width:3rem;height:3rem;" @click.prevent='cnvBold = "1"'>小</button>
      <button type="button" class="middle btn rounded-0 border" style="width:3rem;height:3rem;" @click.prevent='cnvBold = "5"'>中</button>
      <button type="button" class="large btn rounded-0 border" style="width:3rem;height:3rem;" @click.prevent='cnvBold = "10"'>大</button>
    </div>
  </div>
  <div id="btn">
    <button type="button" id="clear" @click.prevent="clear()">消す</button>
    <button type="button" id="submit" @click.prevent="submit()">投稿</button>
  </div>
</div>
</template>

<script>
export default {
    data(){
      return{
        cnvBold:5,  // 線の太さ
        clickFlg:0,
        cnvColor : "0, 0, 0, 1",
        bgColor:"rgb(255,255,255)",
        cnvWidth:500,
        cnvHeight:500
      }
    },
    mounted() {
        // canvas
        let cnvs = null;
        cnvs = this.$refs.canvas;
        const ctx = null;
        this.ctx = cnvs.getContext('2d');

        this.ctx.fillStyle = this.bgColor;
        this.ctx.fillRect(0,0,this.cnvWidth,this.cnvHeight);

       
    },
    methods: {
        MouseDown: function() {
            this.clickFlg = 1;
        },
        MouseUp: function() {
            this.clickFlg = 0;
        },
        MouseMove: function(e){
            if(!this.clickFlg) return false;
            this.ctx.lineWidth = this.cnvBold;
            this.ctx.strokeStyle = 'rgba('+this.cnvColor+')';
            if (this.clickFlg == "1") {
                this.clickFlg = "2";
                this.ctx.beginPath();
                this.ctx.lineCap = "round";  //　線を角丸にする
                this.ctx.moveTo(e.offsetX,e.offsetY);
            } else {
                this.ctx.lineTo(e.offsetX,e.offsetY);
            }
          this.ctx.stroke();
        },
        clear:function(){
            this.ctx.clearRect(0,0,this.cnvWidth,this.cnvHeight);
            this.ctx.fillStyle = this.bgColor;
            this.ctx.fillRect(0,0,this.cnvWidth,this.cnvHeight);
        },
        submit:function(){
          let cnvs = this.$refs.canvas;
          let data = cnvs.toDataURL();
          this.$emit('getData', data);
        }
    }
}
</script>

<style>
button#clear,button#submit{
  width: 200px;
  height: 50px;
  background-color: #fff;
  border: none;
  color: #fff;
  margin-top: 10px;
}
button#clear{
  background-color: blue;
}
button#submit{
  background-color: orange;
}
  #color_option,#bold_option{
    margin-top: 15px;
  }
  #btn{
    margin-top: 15px;
  }
  #option{
    margin-top: 15px;
  }
  .color > a{
    display: inline-block;
    width: 20px;
    height: 20px;
  }
  .black{
    background-color: #000000;
  }
  .red{
    background-color: #ff0000;
  }
  .blue{
    background-color: #0000ff;
  }
  .green{
    background-color: #008000;
  }
  .yellow{
    background-color: #FFD400;
  }

  @media(min-width:544px){
    .create_table_box{
      width: 900px;
      margin: 0 auto;
    }
  }
</style>