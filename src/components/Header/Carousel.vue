<template>
    <div class="row w-100 banner ">
        <div class="col-md-6 col-sm-12 box-1">
            <h1 class="title-1">MudahJe</h1>
            <span class="title-2">Apps</span>
            <p>The latest update to MudahJe introduces improved interactive lessons, a more intuitive interface, and
                smoother navigation, making it easier and faster to learn sign language with an enhanced, user-friendly
                experience.</p>
        </div>
        <div class="col-md-6 col-sm-12 row justify-content-end banner-img">
            <img src="/img/logo.png" class="me-3" style="width: 50vh;" alt="">
        </div>
    </div>

</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.banner {
    padding: 5em;
}

.banner-img {}

.box-1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.title-1 {
    font-family: "DM Sans", serif !important;
    font-optical-sizing: auto;
    font-weight: 200;
    font-size: 10vh;
    font-style: normal;
    line-height: 0.5;
}

.title-2 {
    color: #63C196;
    font-family: "DM Sans", serif !important;
    font-optical-sizing: auto;
    font-weight: 700;
    font-size: 10vh;
    font-style: normal;
}

.carousel-title {
    position: absolute;
    top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 80px;
    bottom: 100px;
    width: 50vh;
    /* height: 20vh; */

}
</style>