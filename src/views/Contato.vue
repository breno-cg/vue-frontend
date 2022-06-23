<template>
  <div class="container">
      <h1 class="text-center"> Lista Contatos</h1>
      <table class="table table-striped">
        <thead>
            <th>
               <input type="checkbox" v-model="allSelected" @change="selectAll"></th>
            <th>Id </th>
            <th>Nome</th>
            <th>Número</th>
            <th>Email</th>
            <th>Action</th>
        </thead>
        <tbody>
          <tr v-for="contato in contatos" :key="contato.id">
            <td><input type="checkbox" v-model="selected" :value="contato.id"></td>
             

            <td><router-link :to=" {name:'updateform', params:{id: contato.id}}">{{contato.id}}</router-link></td>
            <td>{{contato.nome}}</td>
            <td>{{contato.numero}}</td>
            <td>{{contato.email}}</td>
            <td><router-link :to="{name:'deleteform', params:{id: contato.id}}"><button>Delete</button></router-link></td>
          </tr>
        </tbody>

      </table>
      <br>
      
      <span>Selected Ids: {{selected}} </span>
  </div>
</template>
<script>
import ContatoService from '../services/ContatoService'
export default{
  name:'Contato',
  data() {
    return {
      contatos:[],
      selected:[],
      allSelected:false,
      
     
    };
  },
  methods:{
     getContatos(){
       ContatoService.getContatos().then(
         response => {
              this.contatos = response.data;
         }
       );
     },
     selectAll(){
       this.contatoIds =[];
       if(this.allSelected){
         const selected = this.contato.map((contato)=>contato.id)
         this.selected = selected;
        
       }else{
         this.selected=[];
       }
     }
  },
  created(){
      this.getContatos()
  }
}
</script>
