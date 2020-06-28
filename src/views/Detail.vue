<template>
  <div class="detail-outer-wrap"
       v-if="!loading">
    <div class="detail-inner-wrap">
      <div class="article-wrap">
        <h2>{{renderData.title}}</h2>
        <div class="article-info">
        <div class="left">
         <img style="width:20px;margin-right:10px" :src="renderData.media_user.avatar_url"><span>{{renderData.source}}</span>
        </div>
        <div class="right"><span>{{renderData.comment_count}}评论 </span><em v-if="renderData.publish_time">{{$formatTime(renderData.publish_time)}}</em></div></div>
        <div class="content-wrap">
          <div class="content ql-editor"
               v-html="renderData.content"></div>
        </div>
      </div>
    </div>
    <div style="height:20px"></div>
  </div>
  <div v-else class="loading-svg">
    <img src="@/assets/loading.svg">
  </div>
</template>
<script>
export default {
  data () {
    return {
      loading: false,
      renderData: {}
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.page = 1;
    this.getData(to.params.id);
    next()
  },
  created () {
    this.getData(this.$route.params.id);
  },
  methods: {
    handleJump (item) {
      this.$router.push("/detail/" + item.item_id)
    },
    getData (id) {//请求
      this.loading = true;
      this.$http.get(`/testapi/i${id}/info/`, {params: {
          _signature:'HLIIRxARQk77xfBBg2LRhxyyCF',
          i:id
        }   }).then((res) => {
        this.loading = false;
        const _data = res.data;
        if(_data.success){
           this.renderData=_data.data||{}
        }
      })
    },
  }
}
</script>

<style lang="less">
.loading-svg{
  width: 20%;
  position: absolute;
  top:50%;
  transform: translateY(-50%);
  left:0;
  right: 0;
  margin:0 auto;
}
.detail-com-title {
  text-align: center;
  margin-bottom: 8px;
  position: relative;

  em {
    font-size: 18px;
    font-weight: 400;
    color: #353535;
    text-align: center;
    font-weight: 700;
    font-weight: 600;
    color: #333;
    padding: 0 2px;
    background: -webkit-linear-gradient(
      top,
      hsla(0, 0%, 100%, 0.1) 50%,
      rgba(163, 201, 255, 0.35) 0
    );
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(50%, hsla(0, 0%, 100%, 0.1)),
      color-stop(50%, rgba(163, 201, 255, 0.35))
    );
    background: linear-gradient(
      180deg,
      hsla(0, 0%, 100%, 0.1) 50%,
      rgba(163, 201, 255, 0.35) 0
    );
  }
}

.recom-more {
  background-color: #fff;
}

.recom-more .article-list-item:last-child {
  border-bottom: 0;
}

.article-wrap {
  background-color: #fff;
  padding: 15px;
  padding-bottom: 0;

  h2 {
    font-size: 20px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    /*! autoprefixer: ignore next */
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    color: rgba(17, 23, 29, 0.86);
    line-height: 30px;
  }

  .article-info {
    font-size: 12px;
    font-weight: 400;
    color: #999;
    line-height: 20px;
    margin: 32px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left,.right{
      display: flex;
      align-items: center;
    }
    i {
      margin-left: 5px;
    }

    span {
      margin-right: 8px;
    }
  }

  .content {
    line-height: 30px;

    img {
      display: block;
      margin: 0 auto;
    }

    p {
      font-size: 14px;
      color: #555;
      line-height: 28px;
    }
  }
}
</style>
