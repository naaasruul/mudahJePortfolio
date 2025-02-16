<template>
    <div class="col-md-4 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
        <div class="team-item">
            <div class="team-img">
                <img :src="image" class="img-fluid rounded-top w-100" alt="">
                <div class="team-icon">
                    <a class="btn btn-primary btn-sm-square rounded-pill mb-2" :href="twitter"><i
                            class="fab fa-twitter"></i></a>
                    <a class="btn btn-primary btn-sm-square rounded-pill mb-2" :href="linkedin"><i
                            class="fab fa-linkedin-in"></i></a>
                    <a class="btn btn-primary btn-sm-square rounded-pill mb-0" :href="instagram"><i
                            class="fab fa-instagram"></i></a>
                </div>
            </div>
            <div class="team-title p-4">
                <h4 class="mb-0">{{ name }}</h4>
                <p class="mb-0">{{ role }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        name: String,
        role: String,
        image: String,
        twitter: String,
        linkedin: String,
        instagram: String,
    }
};
</script>