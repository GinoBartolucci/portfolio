<template>
    <div id="mainSocialMedia">
        <h1>Contactame</h1>
        <p id="proyectosText">Hi, my name is Gino Bartolucci</p>
        <div>
            <InputText v-model="text"/>
            <ConfirmDialog></ConfirmDialog>
            <Button @click="eliminar"  text="Confirm">Enviar</Button>
            <br/>
            {{text}}
        </div>
    </div>
    
</template>

<script>
export default {
    data(){
    return{
      text: 'Hola'
    }
  }, methods:{
    eliminar(){
      this.$confirm.require({
        message: this.text,
        header: 'Desea enviar este mesanje?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.text = null;
        },
        reject: () => {
            //callback to execute when user rejects the action
        }
      });
    }
  }
}
</script>

<style scoped>
h1{
    color: #f0ffff;
}
#mainSocialMedia
{
    background-color: #4D4C7D;
    padding: 32px;
}
#proyectosText{
    color: #f0ffff;
}
</style>