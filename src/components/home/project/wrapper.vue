<template>
    <c-box w="100%" p="4" color="black">
        <c-text fontSize="xl" style="font-weight: 700">Projects</c-text>
        <c-text fontSize="xl">Sometime I create product to solve some problems, just for fun, or just to solve my own problems.</c-text>
        <c-box py="5">
            <template v-for="(i, idx) in projects">
                <c-box :d="display" mt="3" bg="#a6a6a614" boxShadow="md" :key="idx" v-if="idx < limit">
                    <div class="fill-img">
                        <c-image
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            :src="i.img"
                            fallback-src="https://via.placeholder.com/150"
                            alt="project image" />
                    </div>
                    <c-box px="5" py="5">
                        <c-text fontSize="md" fontWeight="600">{{ i.name }}</c-text>
                        <c-text fontSize="md" color="gray.500">{{ i.description }}</c-text>
                        <a v-if="i.link" :href="i.link" target="_blank">
                            <c-button variant-color="green" size="xs" right-icon="arrow-forward">Visit</c-button>
                        </a>
                    </c-box>
                </c-box>
            </template>
        </c-box>
        <c-box align-items="center" width="100%" style="padding: 15px; text-align: center">
          <g-link to="/projects">
            <c-button variant-color="green">View Projects</c-button>
          </g-link>
        </c-box>
    </c-box>
</template>

<script>
import { 
    CText, 
    CButton,
    CBox,
    CLink,
    CImage,
    CFlex
 } from "@chakra-ui/vue";
 import ProjectAPI from "@/staticApi/projects";
export default {
    props: {
        limit: {
            type: Number,
            default: 3
        }
    },
    components: {
        CBox,
        CFlex,
        CButton,
        CText,
        CImage
    },
    data () {
        return {
            projects: ProjectAPI,
            display: 'flex'
        }
    },
    mounted () {
        if (window.outerWidth < 500) {
            this.display = 'block'
        }
    }
}
</script>

<style scoped>
.fill-img {
    max-width: 150px;
    max-height: 150px;
}
</style>