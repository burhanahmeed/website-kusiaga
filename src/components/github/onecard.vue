<template>
  <c-box maxW="sm" border-width="1px" rounded="lg" overflow="hidden">
    <c-box p="6">
      <c-box d="flex" align-items="baseline">
        <c-box
          :color="`${color}.500`"
          font-weight="semibold"
          letter-spacing="wide"
          font-size="xs"
          text-sransform="uppercase"
        >
          {{ props.stargazers_count }} stars &bull; {{ props.watchers_count }} watchers &bull; {{ props.forks }} forks
        </c-box>
      </c-box>
      <c-box
        mt="1"
        font-weight="semibold"
        as="h4"
        line-height="tight"
        is-truncated
      >
        <c-link as="router-link" :href="props.html_url" is-external>
          {{ props.name }}
        </c-link>
      </c-box>
      <c-box :color="`${color}.500`" style="height: 70px; overflow: hidden">
        {{ props.description | trim_string }}
      </c-box>
      <c-box d="flex" mt="2" align-items="center">
        <c-box as="span" :color="`${color}.600`" font-size="sm">
          last update {{ props.pushed_at | date }}
        </c-box>
      </c-box>
      <c-box mt="3">
        <c-badge v-if="props.license" rounded="full" px="2" variant-color="green">
          {{ props.license.name }}
        </c-badge>
        <c-badge rounded="full" px="2" variant-color="indigo">
          {{ props.language }}
        </c-badge>
      </c-box>
    </c-box>
  </c-box>
</template>

<script>
import { 
  CBox,
  CImage,
  CBadge, 
  CIcon,
  CLink
} from '@chakra-ui/vue';
import moment from 'moment'

export default {
  components: {
    CLink,
    CBadge,
    CIcon,
    CBox,
    CImage
  },
  name: 'Github card',
  props: ['props', 'nightMode'],
  filters: {
    date (v) {
      return moment(v).fromNow();
    },
    trim_string (string) {
      var length = 100;
      var trimmedString = string.length > length ? 
                    string.substring(0, length - 3) + "..." : 
                    string;
      return trimmedString;
    }
  },
  data () {
    return {

    }
  },
  computed: {
    color () {
      if (this.nightMode) {
        return '#F5DEB3'
      } else {
        return 'gray'
      }
    }
  }
}
</script>
