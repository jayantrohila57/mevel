import { Stack, Text } from '@sanity/ui'

export function CharacterCounterField(props: {
  renderDefault: (props: { value?: string }) => React.ReactNode
  value?: string
}) {
  return (
    <Stack space={3}>
      {props.renderDefault(props)}
      <Text size={1}>Characters: {props.value?.length || 0}. </Text>
    </Stack>
  )
}
