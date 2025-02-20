import Pressable from "../../../designSystem/Pressable/Pressable";
import { SvgIcon } from "../../../designSystem/SvgIcon/SvgIcon";
import Text from "../../../designSystem/Text/Text";
import { SearchSuggestionsTopButtonProps } from "./SearchSuggestionsTopButton.types";

export default ({ icon: Icon, label, ...props }: SearchSuggestionsTopButtonProps) => {
  return (
    <Pressable
      flex={2}
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      borderWidth={1}
      borderColor="primaryDark"
      backgroundColor="surface"
      paddingVertical="xs"
      borderRadius="l"
      {...props}
    >
      <SvgIcon
        icon={Icon}
        width={16}
        height={16}
        marginRight="s"
        color="primaryDark"
      />
      <Text 
        fontFamily="SemiBold" 
        fontSize={14} 
        color="primaryDark"
        letterSpacing={0.3}
        textTransform="capitalize"
      >
        {label}
      </Text>
    </Pressable>
  )
}