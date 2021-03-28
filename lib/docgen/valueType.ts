type Value = {
  tags: {}
  description: string
  displayName: string
  methods: any[]
  props: Record<string, PropType>
}

export type PropType = {
  defaultValue?: {
    value: string
  } | null
  description?: string
  name: string
  declarations: {
    fileName: string
    name: string
  }[]
  required: boolean
  type: {
    name: string
  }
}

export default Value
