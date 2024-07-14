import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    value: Number,
  },
  setup(props) {
    const counter = ref(props.value);
    const contadorQuadrat = computed(() => counter.value * counter.value);

    return {
      counter,
      contadorQuadrat,
    };
  },
});
