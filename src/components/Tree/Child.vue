<template>
  <li class="child">
    <div
      class="child__title"
      :class="{ child__title_department: isDepartment }"
    >
      <div class="child__block" v-if="isDepartment">
        <span>{{ file.name }}</span>
        <div class="child__wrapper">
          <Button
            class="child__button child__button_ban"
            title="Ban add file"
            @click="toggleBan"
          >
            {{ isBan ? "P" : "B" }}
          </Button>
          <Button
            v-if="!file.root"
            class="child__button child__button_remove"
            title="Remove"
            @click="removeFile"
          >
            R
          </Button>
          <div class="child__toggle" @click="toggleOpen">
            {{ isOpen ? "C" : "O" }}
          </div>
        </div>
      </div>

      <div class="child__block" v-if="!isDepartment">
        <input
          class="child__input"
          type="text"
          maxlength="20"
          v-model="editName"
          :disabled="!isEdit"
          placeholder="Add new file name..."
        />

        <div>
          <Button
            class="child__button child__button_edit"
            v-if="!isEdit"
            @click="isEdit = !isEdit"
          >
            E
          </Button>
          <Button
            class="child__button child__button_edit"
            v-if="isEdit"
            title="Edit"
            @click="editFile"
          >
            S
          </Button>
          <Button
            class="child__button child__button_remove"
            title="Remove"
            @click="removeFile"
          >
            R
          </Button>
          <Button
            class="child__button"
            title="Create folder"
            @click="isShow = true"
          >
            F
          </Button>
        </div>
      </div>
    </div>
    <ul class="child__tree" v-show="isOpen" v-if="isDepartment">
      <child
        class="file"
        v-for="(child, index) in file.children"
        :key="index"
        :file="child"
        @createFolder="$emit('createFolder', $event)"
        @addFile="$emit('addFile', $event)"
        @removeFile="$emit('removeFile', $event)"
        @editFile="$emit('editFile', $event)"
      ></child>
      <li v-if="!isBan" class="child__add">
        <input
          class="child__input"
          type="text"
          maxlength="20"
          v-model="name"
          placeholder="Add new file..."
        />
        <Button
          class="child__button child__button_add"
          title="Add"
          @click="addFile"
          :disabled="!name"
          >A</Button
        >
      </li>
    </ul>
    <Modal title="Add folder name" v-if="isShow" @onClose="closeModal">
      <div class="child__modal">
        <input
          class="child__input child__input_modal"
          type="text"
          v-model="department"
        />
        <Button
          class="child__button child__button_modal"
          :disabled="!department"
          @click="createFolder"
          >Create folder</Button
        >
      </div>
    </Modal>
  </li>
</template>

<script>
import Modal from "../../ui/Modal";
import Button from "../../ui/buttons/Button";
import { getUniqueId } from "../../helpers/getUniqueId";

export default {
  components: {
    Modal,
    Button
  },
  name: "child",
  props: {
    file: Object
  },
  data: function() {
    return {
      isBan: false,
      isEdit: false,
      isShow: false,
      isOpen: false,
      name: "",
      editName: this.file.name,
      department: ""
    };
  },
  computed: {
    isDepartment() {
      return this.file.children;
    }
  },
  methods: {
    toggleOpen() {
      if (this.isDepartment) {
        this.isOpen = !this.isOpen;
      }
    },

    toggleBan() {
      this.isBan = !this.isBan;
    },
    addFile() {
      const id = getUniqueId();
      this.$emit("addFile", { file: this.file, name: this.name, id });
      this.name = "";
    },

    removeFile() {
      this.$emit("removeFile", { file: this.file });
    },

    editFile() {
      this.isEdit = false;
      this.$emit("editFile", { file: this.file, name: this.editName });
    },
    createFolder() {
      const id = getUniqueId();
      this.$emit("createFolder", {
        id,
        file: this.file,
        department: this.department
      });
      this.closeModal();
      this.isOpen = true;
      this.department = "";
    },
    closeModal() {
      this.isShow = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.child {
  width: 100%;
  margin-bottom: 3px;
  padding: 5px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;

  .child__button {
    width: 24px;
    height: 24px;
    cursor: pointer;
    margin-left: 10px;
    padding: 5px;
    font-size: 14px;
    border-radius: 5px;
    font-weight: bold;

    &:hover {
      opacity: 0.7;
    }

    &:disabled {
      background-color: gray;
      &:hover {
        opacity: 1;
        cursor: auto;
      }
    }
  }
  .child__button_edit {
    background-color: orange;
  }

  .child__button_remove {
    background-color: tomato;
  }

  .child__button_add {
    background-color: green;
  }

  .child__button_ban {
    background-color: purple;
  }

  .child__button_modal {
    width: auto;
    height: auto;
    border-radius: 20px;
    padding: 10px;
    margin-top: 30px;
  }
}

.child__block {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.child__wrapper {
  display: flex;
}

.child__toggle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-left: 10px;
  font-size: 14px;
  background-color: black;
  color: white;
  border-radius: 5px;
  text-align: center;
}

.child__title {
  display: flex;
  justify-content: space-between;
}

.child__title_department {
  font-weight: bold;
  text-transform: uppercase;
}

.child__modal {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.child__input {
  width: 40%;
  height: 35px;
  max-height: 100%;
  margin: 0;
  padding: 12px 6px;
  border-radius: 5px;

  &:disabled {
    background: transparent;
    border-color: transparent;
  }

  &::placeholder {
    color: #ccc;
    font-size: 14px;
  }
}

.child__input_modal {
  width: 100%;
  padding: 20px;
}

.child__add {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
}
</style>
