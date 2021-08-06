<template>
  <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div class="table-responsive">
      <div class="playbook">
        <h1>This is an playbook page.</h1>
      </div>

      <div class="accordion" id="PlaybookList">
        <div class="shadow p-3 mb-5 bg-white rounded">
          <table class="table table-striped table-sm">
            <thead>
            <tr>
              <th>Header</th>
              <th>Header</th>
              <th>Header</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, idx) in items" :key="idx">
              <td>{{item.id}}</td>
              <td @click="openModal"><u>{{item.name}}</u></td>
              <td>{{item.ipAddress}}</td>
            </tr>
            </tbody>
          </table>
          <Modal v-show="showContent" @close="showContent = false"></Modal>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import {defineComponent} from "vue";

// interface Playbook {
//   id: number;
//   name: string;
//   ipAddress: string;
// }

export default defineComponent({
  name: 'Playbook',
  el: 'playbook',
  data: function() {
    return {
      title: 'playbook',
      showContent: false,
      items: [
        {id: 1, name: "Foo", ipAddress: "127.0.10.10"},
        {id: 2, name: "Bar", ipAddress: "127.0.10.11"},
        {id: 3, name: "Bazz", ipAddress: "127.0.10.12"},
      ]
    }
  },

  props: {
  //   items: [
  //     {id: 1, name: "Foo", ipAddress: "127.0.10.10"},
  //     {id: 2, name: "Bar", ipAddress: "127.0.10.11"},
  //     {id: 3, name: "Bazz", ipAddress: "127.0.10.12"},
  //   ],
  }
});
</script>