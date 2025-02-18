import Box from "../../../designSystem/Box/Box"
import Card from "../../../designSystem/Card/Card"
import { SvgIcon } from "../../../designSystem/SvgIcon/SvgIcon"
import { SearchSpecialityCardProps } from "./SearchSpecialityCard.types"

export default ({ icon: Icon, label }: SearchSpecialityCardProps) => {
  return (
    <Card
      flex={2}
      minWidth="45%"
      image={
        <Box
          backgroundColor="primaryLight"
          padding="s"
          borderRadius="l"
          marginHorizontal="s"
        >
          <SvgIcon
            icon={Icon}
            width={16}
            height={16}
            color="primary"
          />
        </Box>
      }
      text={label}
      textProps={{
        fontFamily: 'Regular',
        fontWeight: '600'
      }}
      paddingRight="sToM"
      horinzontal
    />
  )
}