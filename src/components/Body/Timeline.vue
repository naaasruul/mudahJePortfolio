<template>
    <div class="container-fluid">
        <div class="container py-5">
            <div class="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style="max-width: 800px;">
                <h4 class="text-primary">Milestones & Achievements</h4>
                <h1 class="display-4 mb-4">Our Achievements</h1>
            </div>
            <v-timeline align="start">
                <v-timeline-item v-for="item in items" :key="item.id" :dot-color="item.color" size="small">
                    <div>
                        <p>
                            {{ item.date }}
                        </p>
                        <div class="text-h6">
                            {{ item.title }}
                        </div>
                        <div>
                            {{ item.place }}
                        </div>
                        <div class="py-md-4 mx-lg-auto">
                            <a :href="item.image">
                                <v-img aspect-ratio="16/9" cover :src="item.image"></v-img>
                            </a>
                        </div>
                    </div>
                </v-timeline-item>
            </v-timeline>
        </div>
    </div>
</template>
  <script>
    export default {
      data: () => ({
        items: [
          {
            id: 1,
            color: 'info',
            icon: 'mdi-information',
            date: '5 February 2024',
            title: 'GOLD AWARD FOR: BUSINESS MODEL CANVAS CATEGORY',
            place: 'At Kolej Mara Kuala Nerang',
            program: 'International Innovation & Entrepreneurship Carnival',
            image:'img/awards/iiec-2.jpg'
          },
          {
            id: 2,
            color: 'info',
            icon: 'mdi-information',
            date: '5 February 2024',
            title: 'GOLD AWARD FOR IDEA OR PRODUCT CATEGORY',
            place: 'At Kolej Mara Kuala Nerang',
            program: 'International Innovation & Entrepreneurship Carnival',
            image:'img/awards/iiec.jpg'
          },
          {
            id: 3,
            color: 'info',
            icon: 'mdi-information',
            date: 'February 2024',
            title: 'GOLD AWARD IN IIEF 2024',
            place: 'At Kolej Mara Kulim',
            program: 'International Innovation & Exhibition Fair',
            image:'img/awards/iief.jpg'
          },
          {
            id: 4,
            color: 'info',
            icon: 'mdi-information',
            date: '10 May 2024',
            title: 'TOP 5 AWARD (STARTUP INNOVATION)',
            place: 'By Laman Teknologi,',
            program: 'International Innovation & Exhibition Fair',
            image:'img/awards/startup.jpg'
          },
          {
            id: 5,
            color: 'info',
            icon: 'mdi-information',
            date: 'November 2024',
            title: 'i-MARATECH 2024',
            place: 'At GPC Medan Mara',
            program: 'International Innovation & Exhibition Fair',
            image:'img/awards/iiec.jpg'
          },
        ],
      }),
    }
  </script>