<template>
  <div class="header">
    <div class="header__logo">
      <NuxtLink to="/"></NuxtLink>
    </div>
    <div class="header__menu">
      <div class="header__menu-left">
        <NuxtLink to="/catalog">Магазин</NuxtLink>
        <NuxtLink to="/about">О нас</NuxtLink>
      </div>
      <div class="header__menu-separator"></div>
      <div class="header__menu-right">
        <button><Icon name="icons:search" size="21" /></button>
        <NuxtLink to="/basket"><Icon name="icons:basket" size="21" /></NuxtLink>
        <NuxtLink to="/favorites"
          ><Icon name="icons:favorites" size="21"
        /></NuxtLink>
        <NuxtLink to="/account"><Icon name="icons:user" size="21" /></NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  margin: 0 auto;
  margin-top: 48px;
  padding: 0 16px;
  max-width: 1248px;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-gray);
}

.header__logo {
  width: 100%;
  max-width: 128px;
  height: 40px;
  background-image: url("/assets/image/logo.svg");
  background-position: center;
  background-repeat: no-repeat;
}

.header__menu {
  display: flex;
}

.header__menu-left {
  display: flex;
  align-items: center;
  gap: 60px;
  padding-bottom: 20px;
}

.header__menu-left a {
  font-size: 16px;
  line-height: 27px;
  color: var(--color-black);
  text-decoration: none;
}

.header__menu-separator {
  position: relative;
  margin: 0 60px;
}

.header__menu-separator::after {
  content: "";
  position: absolute;
  top: 8%;
  width: 1px;
  height: 17px;
  background-color: var(--color-dark-gray);
}

.header__menu-right {
  display: flex;
  align-items: center;
  gap: 40px;
  padding-bottom: 20px;
}
</style>
