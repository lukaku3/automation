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
            <tr v-for="(item, idx) in playbooks" :key="idx">
              <td>{{item.id}}</td>
              <td @click="openModal(item.id)"><u>{{item.name}}</u></td>
              <td>{{item.ipAddress}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <MyModal  v-show="showContent" @close="showContent = false"></MyModal>
    </div>
  </main>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";
import {useStore} from "vuex";
import MyModal from "../components/ModalComponent.vue";

export default defineComponent({
  name: 'Playbook',
  el: 'playbook',
  setup() {
    const store = useStore()
    return {
      count: computed(() => store.state.playbooks.length ),
      playbooks: computed(() => store.state.playbooks ),
    }
  },
  data: function() {
    return {
      showContent: false,
      title: 'playbook',
    }
  },
  components: {
    MyModal
  },
  provide() {
    return {
      // provideData: this.items,
    }
  },
  methods: {
    closeModal: function() {
      this.showContent = false;
    },
    openModal: function(id: number) {
      this.showContent = true;
      this.initModal()
      this.mkModalBody(id)
    },
    initModal: function () {
      let el: Element | null = document.querySelector('.modal-body div');
      el?.remove();
      let new_div = document.createElement('div');
      let parent: Element | null = document.querySelector('.modal-body');
      parent?.append(new_div);
    },
    mkModalBody: function (id: number) {
      let parent: Element | null = document.querySelector('.modal-body div')
      for (const [key, value] of Object.entries(this.playbooks[(id-1)])) {
        let div: Element = document.createElement('div')
        div.className = 'mb-3'
        let lbl: Element = document.createElement('label')
        lbl.className = 'form-label'
        lbl.innerHTML = `${key}`
        let inp: Element = document.createElement('input')
        inp.setAttribute("type", "text")
        inp.setAttribute("value", `${value}`)
        inp.className = 'form-control'
        div.appendChild(lbl)
        div.appendChild(inp)
        parent?.appendChild(div)
      }

    }
  },
});
</script>

<style scoped>
</style>