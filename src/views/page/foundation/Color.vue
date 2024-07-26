<template> 
  <article  class="colorSys">
    <section>
      <h2>Gray Scale</h2>
      <ul class="gray">
        <li>
          <p class="tit">White </p>
          <p class="color">#fff</p>
        </li>
        <li v-for="(a,i) in 9" :key="i" :style="`background-color:var(--gray-${a}0)`">
          <p class="tit">Gray</p>
          <p class="color">
            var(--gray-{{a}}0)
          </p>
        </li>          
        <li>
          <p class="tit">Black</p>
          <p class="color">#000</p>
        </li>
      </ul>
    </section>
    <section>
      <h2>Primary Color</h2>
      <div class="primaryWrap">
        <div class="primary">
            <p class="tit">Primary</p>
            <p class="color">#0F6BFF <br>var(--primary)</p>
        </div>
        <ul class="primarySub">        
          <li class="sub100">#073580<br>var(--primary-100)</li>
          <li class="sub90">#0A4BB3<br>var(--primary-90)</li>
          <li class="sub80">#3D87FD<br>var(--primary-80)</li>
          <li class="sub60">#6BA2FB<br>var(--primary-60)</li>
          <li class="sub40">#99BEF9<br>var(--primary-40)</li>
          <li class="sub20">#C7D9F7<br>var(--primary-20)</li>
        </ul>
      </div>
    </section>
    <div class="row no-gutters sideColorWrap">
      <div class="col-4" v-for="(side,i) in sideColor" :key="i">            
        <section>
          <h2>{{ side.name }} Color</h2>
          <div class="sideColor" :style="`background-color:` + side.color">
            <p class="tit">{{ side.name }}</p>
            <p class="color">{{ side.color }}<br>var(--{{ side.name }})</p>
          </div>
          <ul class="sideColorSub">
            <li :style="`background-color:var(--${ side.name }80)`"><span>var(--{{ side.name }}80)</span></li>
            <li :style="`background-color:var(--${ side.name }60)`"><span>var(--{{ side.name }}60)</span></li>
            <li :style="`background-color:var(--${ side.name }40)`"><span>var(--{{ side.name }}40)</span></li>
            <li :style="`background-color:var(--${ side.name }20)`"><span>var(--{{ side.name }}20)</span></li>
          </ul>
        </section>          
      </div>
    </div>      
  </article>
</template>

<script>
export default {
  name : 'GeneralColor',  
  data(){
    return{      
      sideColor:[{
        name:'secondary',
        color:'#31415F',
      },{
        name:'success',
        color:'#00C394',
      },{
        name:'info',
        color:'#00A3FF',
      },{
        name:'warning',
        color:'#FFA800',
      },{
        name:'danger',
        color:'#E30029',
      },{
        name:'special',
        color:'#6223FD',
      }]
    }
  },
}
</script>

<style lang="scss" scoped> 
.colorSys{  
  h2{text-transform:capitalize;}
  p{
    color: #fff;        
    margin-bottom: 0;
    &.tit{font-size:2rem;font-weight: var(--font-bold);}
    &.color{font-size:1.4rem;color: rgb(255 255 255 / 60%); }
  }
  .gray{
    display: flex;
    background: #fff;
  
    li{
      width:100%;    
      padding: 2rem 0;
      color : #fff;
      font-family: var(--font-tit);
    
      p{
        text-align: center;
      }
      &:first-child{
        background-color:#fff;
        p{color:#000;}
      }
      &:last-child{
        background-color:#000;
      }
    }
  }
  .primaryWrap{
    display: flex;
    flex-wrap: wrap;

    .primary{      
      display: flex;    
      align-items: start;
      justify-content: flex-end;
      flex-flow: column;    
      width:25%; 
      background: var(--primary); 
      
      .tit{color:#fff;font-size:2rem;padding: 0 1.5rem;}
      .color{padding: 0.5rem 1.5rem 1.5rem;}  
    }
    .primarySub{
        width: 75%;
        display: flex;
        flex-wrap: wrap;
  
        li{
          margin: 0;
          padding: 2rem;
          font-size:1.3rem;
          background: var(--gray-20);
          height: 9rem;
          display: flex;
          align-items: end;
          width: 33.33333%;
          color:rgba(255, 255, 255, 0.6);

          &.sub20{background:var(--primary20);}
          &.sub40{background:var(--primary40);}
          &.sub60{background:var(--primary60);}
          &.sub80{background:var(--primary80);}
          &.sub90{background:var(--primary90);}
          &.sub100{background:var(--primary100);}
        }
      }

  }

  .sideColorWrap{
    .sideColor{
          width: 100%;
          height: 15rem;
          display: flex;
          flex-flow: column;
          justify-content: end;
          align-items: flex-start;
          padding: 2rem;
        }
    .sideColorSub{
      display:flex;
      li{
        width:25%;
        display: flex;
        align-items: center;
        justify-content: center;
        height:6rem;
        transition: 0.5s;
        color: #fff;

        span{
          font-size: 1.2rem;
          opacity: 0;
          transition: 0.1s;
        }        
        
        p.tit{
          text-transform:capitalize;
        }
        
        &:hover{
          width:25rem;
          transition: 0.3s; 
          flex-grow: 1;    
          span{
            font-size: 1.3rem;
            opacity: 1; 
            transition: 0.8s;
          } 
        }
      }
    }
  }
}
</style>