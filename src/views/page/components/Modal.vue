<template>   
  <article class="modalSys">
    <section>
      <h2>Modal Default</h2>
      <Buttons variant="primary" @click="modalOpen[0]=true">Default Modal<small>(모달 배경 클릭 닫기 이벤트 없음)</small></Buttons>
      <modal :active=modalOpen[0] :clickOnBg="false" size="sm" @closed="modalOpen[0]=false">        
        <template v-slot:modalHeader><h4>Default Modal Header</h4></template>
        <template v-slot:modalBody>모달 배경을 클릭시 모달이 닫히는 이벤트가 없습니다.</template>
        <template v-slot:modalFooter>  
          <Buttons variant="primary" class="modal-default-button" @click="modalOpen[0]=false">OK</Buttons>
        </template>
      </modal>

      <Buttons variant="primary" @click="modalOpen[1]=true">Default Modal <small>(모달 배경 클릭 닫기 이벤트 있음)</small></Buttons>
      <modal :active=modalOpen[1] :clickOnBg="true" size="sm" @closed="modalOpen[1]=false">        
        <template v-slot:modalHeader><h4>Default Modal Header</h4></template>
        <template v-slot:modalBody>모달 배경을 클릭시 모달이 닫히는 이벤트 실행됩니다.</template>
        <template v-slot:modalFooter>  
          <Buttons variant="primary" class="modal-default-button" @click="modalOpen[1]=false">OK</Buttons>
        </template>
      </modal>
    </section>  

    <section>
      <h2>Modal Size</h2>
      <Buttons variant="primary" @click="modalOpen[2]=true">Small Modal</Buttons>
      <modal :active="modalOpen[2]" :clickOnBg="true" size="sm" @closed="modalOpen[2]=false">        
        <template v-slot:modalHeader><h4>Small Modal Header</h4></template>
        <template v-slot:modalBody>Small Modal Body</template>
        <template v-slot:modalFooter>  
          <Buttons variant="primary" class="modal-default-button" @click="modalOpen[2]=false">OK</Buttons>
        </template>
      </modal>

      <Buttons variant="primary" @click="modalOpen[3]=true">Medium Modal</Buttons>
      <modal :active="modalOpen[3]" :clickOnBg="true" size="md" @closed="modalOpen[3]=false">        
        <template v-slot:modalHeader><h4>Medium Modal Header</h4></template>
        <template v-slot:modalBody>Medium Modal Body</template>
        <template v-slot:modalFooter>  
          <Buttons variant="primary" class="modal-default-button" @click="modalOpen[3]=false">OK</Buttons>
        </template>
      </modal>

      <Buttons variant="primary" @click="modalOpen[4]=true">Large Modal</Buttons>
      <modal :active="modalOpen[4]" :clickOnBg="true" size="lg" @closed="modalOpen[4]=false">        
        <template v-slot:modalHeader><h4>Large Modal Header</h4></template>
        <template v-slot:modalBody>Large Modal Body</template>
        <template v-slot:modalFooter>  
          <Buttons variant="primary" class="modal-default-button" @click="modalOpen[4]=false">OK</Buttons>
        </template>
      </modal>

      <Buttons variant="primary" @click="modalOpen[5]=true">Full Screen Modal</Buttons>
      <modal :active="modalOpen[5]" :clickOnBg="true" size="full" @closed="modalOpen[5]=false">        
        <template v-slot:modalHeader><h4>Full Screen Modal Header</h4></template>
        <template v-slot:modalBody>Full Screen Modal Body
          <div style="height: 3000px;"></div>
        </template>
        <template v-slot:modalFooter>  
          <Buttons variant="primary" class="modal-default-button" @click="modalOpen[5]=false">OK</Buttons>
        </template>
      </modal>
      
    </section>

    <section>
      <h2>Modal in Modal</h2>      
      <Buttons variant="primary" @click="modalOpen[6]=true">Modal in Modal</Buttons>
      <modal :active="modalOpen[6]" :clickOnBg="true" size="md" @closed="modalOpen[6]=false">
        <template v-slot:modalHeader><h4>Modal in Modal Header</h4></template>
        <template v-slot:modalBody>
            <Buttons variant="primary" @click="modalOpen[7]=true">Modal in Modal</Buttons>
            <modal :active="modalOpen[7]" :clickOnBg="true" size="sm" @closed="modalOpen[7]=false">                
              <template v-slot:modalHeader><h4>Modal in Modal Header</h4></template>
              <template v-slot:modalBody>Modal in Modal Body</template>
              <template v-slot:modalFooter>  
                <Buttons variant="primary" class="modal-default-button" @click="modalOpen[7]=false">OK</Buttons>
              </template>
            </modal>
          </template>
          <template v-slot:modalFooter>  
            <Buttons variant="primary" class="modal-default-button" @click="modalOpen[6]=false">OK</Buttons>
          </template>
      </modal>
    </section>

    <section>
      <h2>Loader Modal</h2>
      <Buttons variant="primary" @click="modalOpen[8]=true">Loader Modal</Buttons>
      <modal :active="modalOpen[8]" :clickOnBg="true" size="sm" hideHead hideFoot @closed="modalOpen[8]=false">
        <template v-slot:modalBody><h4>Loader Modal</h4></template>
      </modal>
    </section>
  </article>  
</template>

<script>
import Modal from '@/components/Modal.vue'

import Buttons from '@/components/Buttons.vue'
export default {
  name : 'ComponentsModal',
  components : { Modal, Buttons},
  data() {
    return {
      modalOpen: [null,null,null,null,null,null,null,null]
    };
  }, 
}
</script>
<style lang='scss' scoped>
.modalSys{
  button{
    margin:0.3rem;
  }
}
</style>