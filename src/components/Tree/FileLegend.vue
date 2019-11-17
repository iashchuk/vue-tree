<template>
  <div class="legend">
    <div class="legend__block">
      <div class="icon icon_open">O</div>
      <span>- open folder</span>
    </div>
    <div class="legend__block">
      <div class="icon icon_open">C</div>
      <span>- close folder</span>
    </div>
    <div class="legend__block">
      <div class="icon icon_ban">B</div>
      <span>- ban add file</span>
    </div>
    <div class="legend__block">
      <div class="icon icon_ban">P</div>
      <span>- permit add file</span>
    </div>
    <div class="legend__block">
      <div class="icon icon_add">A</div>
      <span>- add file</span>
    </div>
    <div class="legend__block">
      <div class="icon icon_folder">F</div>
      <span>- add folder</span>
    </div>
    <div class="legend__block">
      <div class="icon icon_edit">E</div>
      <span>- edit file</span>
    </div>
    <div class="legend__block">
      <div class="icon icon_edit">S</div>
      <span>- save file</span>
    </div>
    <div class="legend__block">
      <div class="icon icon_remove">R</div>
      <span>- remove file / folder</span>
    </div>
  </div>
</template>

<style lang="scss">
.legend {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 0 20px;
  border-radius: 5px;
  border: 1px dashed #ccc;
}

.legend__block {
  display: flex;
  align-items: center;
  font-size: 13px;
  text-transform: uppercase;

  span {
    margin-left: 5px;
  }
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  font-size: 12px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
}

.icon_ban {
  background-color: purple;
}

.icon_add {
  background-color: green;
}

.icon_open {
  background-color: black;
}

.icon_edit {
  background-color: orange;
}

.icon_remove {
  background-color: tomato;
}

.icon_folder {
  background-color: #494ce8;
}
</style>
