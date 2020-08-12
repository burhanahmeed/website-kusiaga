<template>
    <Layout>
        <project-wrapper limit="1000" :link="false" />
    </Layout>
</template>

<script>
import ProjectWrapper from '../components/home/project/wrapper'
export default {
    components: {
        ProjectWrapper
    },
    metaInfo (){
        return {
            title: 'Projects',
            meta: [
                { name: "description", content: this.meta.description },
                    // twitter-card: https://cards-dev.twitter.com/validator
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:title", content: 'About Me - Digital Experiment Lab' },
                { name: "twitter:description", content: this.meta.description },
                { name: "twitter:site", content: "@burhannahm" },
                { name: "twitter:image", content: this.meta.image },
                { name: "twitter:creator", content: "@burhannahm" },

                { property: "og:description", content: this.meta.description },
                { property: "og:image", content: this.meta.image },
            ]
        }
    },
    data () {
        return {
        meta: {
            description: 'List of Berhan\'s projects are here. Contain mostly is side projects or just fun projects.',
            image: 'https://kusiaga.com/metaimg.jpg',
            site: '@burhannahm'
        }
        }
    },
}
</script>