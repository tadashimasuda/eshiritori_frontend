<template>
<div>
  <canvas id="canvas" ref="canvas" v-on:mousedown="MouseDown" v-on:mouseup="MouseUp" v-on:mousemove="MouseMove" width="500" height="300" style="border: solid 1px #000;box-sizing: border-box;"></canvas>
  <div class="option">
    <div class="color">
      色：  
      <button class="black" @click.prevent='cnvColor ="0, 0,0, 1"'></button>
      <button class="red" @click.prevent='cnvColor ="255, 0, 0, 1"'></button>
      <button class="blue" @click.prevent='cnvColor ="0, 0,255, 1"'></button>
    </div>
    <div class="bold">
      太さ：
      <button class="small" @click.prevent='cnvBold = "1"'>小</button>
      <button class="middle" @click.prevent='cnvBold = "5"'>中</button>
      <button class="large" @click.prevent='cnvBold = "10"'>大</button>
    </div>
  </div>
  <button class="clear" @click.prevent="clear()">clear</button>
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
        let cnvs = this.$refs.canvas;
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
        }
    }
}
</script>

<style>
  .option{
    width: 250px;
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
</style>