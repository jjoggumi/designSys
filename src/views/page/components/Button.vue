<template>
  <article  class="buttonSys">
    <section>
      <h2>Basic Btn</h2>
      <div>
        <Buttons> btn </Buttons> 
        <Buttons variant='default'> default </Buttons> 
        <Buttons variant='primary'> Primary </Buttons> 
        <Buttons variant='secondary'> Secondary </Buttons> 
        <Buttons variant='success'> Success </Buttons> 
        <Buttons variant='special'> Special </Buttons>
        <Buttons variant='info'> Info </Buttons> 
        <Buttons variant='danger'> Danger </Buttons> 
        <Buttons variant='warning'> Warning </Buttons> 
        <Buttons variant='gray'> Gray </Buttons> 
        <Buttons variant='dark'> Dark </Buttons> 
        <Buttons variant='primary' aria-disabled="true"> Disabled </Buttons> 
      </div>
    </section>
    <section>
      <h2>Outline Btn</h2>
      <div>
        <Buttons variant='outline-default'> default </Buttons> 
        <Buttons variant='outline-primary'> Primary </Buttons> 
        <Buttons variant='outline-secondary'> Secondary </Buttons> 
        <Buttons variant='outline-success'> Success </Buttons> 
        <Buttons variant='outline-special'> Special </Buttons>
        <Buttons variant='outline-info'> Info </Buttons> 
        <Buttons variant='outline-danger'> Danger </Buttons> 
        <Buttons variant='outline-warning'> Warning </Buttons> 
        <Buttons variant='outline-gray'> Gray </Buttons> 
        <Buttons variant='outline-dark'> Dark </Buttons> 
        <Buttons variant='outline-primary' aria-disabled="true"> Disabled </Buttons> 
      </div>
    </section>
    <section>
      <h2>Icon Btn</h2>
      <div>
        <Buttons variant='primary' icoLeft="chart"> leftIcon </Buttons> 
        <Buttons variant='secondary' icoRight="chart"> rightIcon </Buttons> 
        <Buttons variant='success' icoTop="chart"> topIcon </Buttons> 
        <Buttons variant='special' icoBottom="chart"> bottomIcon </Buttons> 
        <Buttons variant='outline-primary' icoLeft="chart"> leftIcon </Buttons> 
        <Buttons variant='outline-secondary' icoRight="chart"> rightIcon </Buttons> 
        <Buttons variant='outline-success' icoTop="chart"> topIcon </Buttons> 
        <Buttons variant='outline-special' icoBottom="chart"> bottomIcon </Buttons> 
      </div>
    </section>
    <section>
      <h2>Btn Size</h2>
      <div>
        <Buttons variant='primary' size="xs" > extraSmall </Buttons> 
        <Buttons variant='secondary' size="sm" > small </Buttons> 
        <Buttons variant='success' size="md" > medium </Buttons> 
        <Buttons variant='special' size="lg" > large </Buttons> 
        <br>
        <Buttons variant='primary' size="xs"  icoLeft="chart"> extraSmall </Buttons> 
        <Buttons variant='secondary' size="sm"  icoLeft="chart"> small </Buttons> 
        <Buttons variant='success' size="md"  icoLeft="chart"> medium </Buttons> 
        <Buttons variant='special' size="lg"  icoLeft="chart"> large </Buttons> 

        <Buttons block variant='dark'> width 100% </Buttons> 
      </div>
    </section>
    
  </article>  
</template>

<script>
import Buttons from '@/components/Buttons.vue';

export default {
  name : 'ComponentsButton',
  components : {Buttons},
  
}
</script>
<style lang='scss' scoped>
.buttonSys{
  button{
    margin:0.3rem;
  }
}
</style>