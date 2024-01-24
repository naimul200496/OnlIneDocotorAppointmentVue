<template>
<div class="main-wrapper">
    <header class="header">
        <nav class="navbar navbar-expand-lg header-nav">
          <PateintHeaderPart></PateintHeaderPart>
       </nav>
    </header>
    <br>
    <br>
    <div class="content">
        <div class="content">
            <div class="container-fluid">
            <RouterView/>
            </div>
      </div>
    </div>
 </div>
</template>

<script>
import { RouterView } from 'vue-router'
import PateintHeaderPart from '../components/Patient/HeaderPart.vue'
    export default {
        name:'HeaderPart',
        components:{
            PateintHeaderPart,RouterView,
        }
    }

</script>

