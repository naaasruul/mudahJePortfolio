<template>
    <!-- Team Start -->
    <div class="container-fluid team pb-5 mt-5" id="team">
        <div class="container pb-5">
            <div class="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style="max-width: 800px;">
                <h4 class="text-primary">Members</h4>
                <h1 class="display-4 mb-4">Meet Our Expert Team Members</h1>
                <p class="mb-0">Our team is made up of passionate professionals dedicated to making <strong>MudahJe</strong> the best platform for learning Malaysian Sign Language. 
                    With expertise in technology, education, and accessibility, we work together to create an intuitive and inclusive learning experience for everyone. 
                    Get to know the minds behind MudahJe and how they are shaping the future of sign language education!
                </p>
            </div>
            <div class="row justify-content-center gap-6">
                <member-card 
                :name="'Nasrulhaq Hidayat'" 
                :image="'img/members/nasrul.jpg'"    
                :role="'Developer'"
                :twitter="'https://x.com/naaasruul'"
                :linkedin="'www.linkedin.com/in/naaasruul'"
                :instagram="'https://www.instagram.com/naaasruul/'"
                
                ></member-card>
                <member-card 
                :image="'img/members/syahmi.jpg'" 
                :name="'Muhammad Syahmi'"
                :role="'Team Leader'"
                :twitter="'#'"
                :linkedin="'#'"
                :instagram="'https://www.instagram.com/syamiefd._/'"

                
                ></member-card
                >
                <member-card 
                :name="'Muhammad Zaim'" 
                :image="'img/members/zaim.jpg'" 
                :role="'Developer'"
                :twitter="'#'"
                :linkedin="'#'"
                :instagram="'https://www.instagram.com/2aim__/'"

                ></member-card>
            </div>
        </div>
    </div>
    <!-- Team End -->
</template>

<script>
import MemberCard from './Member-Card.vue';

export default {
    components: {
        MemberCard
    }
};
</script>