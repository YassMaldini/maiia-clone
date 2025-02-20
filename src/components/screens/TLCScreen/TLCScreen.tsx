import { SafeAreaView } from "react-native-safe-area-context"
import Box from "../../designSystem/Box/Box"
import Text from "../../designSystem/Text/Text"
import TLCCard from "./TLCCard/TLCCard"
import { useTheme } from "@shopify/restyle"
import { Theme } from "../../../utils/theme/theme"
import { LinearGradient } from "expo-linear-gradient"
import { ScrollView } from "react-native"
import { useAvailableTLC } from "../../api/queries/useAvailableTLC/useAvailableTLC"
import { useEffect } from "react"
import { FlashList } from "@shopify/flash-list"
import { Loading } from "../../commons/Loading/Loading"

export default () => {

  const { colors } = useTheme<Theme>()

  const { data, isLoading } = useAvailableTLC()

  useEffect(() => {
    console.log('data', data)
  }, [data])

  if (isLoading) return <Loading />

  return (
    <Box flex={1} backgroundColor="background">
      <LinearGradient
        colors={[colors.primaryGradientStart, colors.primaryGradientEnd]}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 120
        }}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled
        >
          <LinearGradient
            colors={[colors.primaryGradientStart, colors.primaryGradientEnd]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 1.0 }}
          >
            <Box paddingBottom="sToM">
              <Text
                fontFamily="SemiBold"
                fontSize={20}
                textAlign="center"
                color="white"
              >
                Téléconsultation
              </Text>
            </Box>
          </LinearGradient>
          <Box
            flex={1}
            backgroundColor="background"
            borderTopLeftRadius="m"
            borderTopRightRadius="m"
            padding="sToM"
          >
            <Text variant="label" marginBottom="sToStoM">
              Les plus recherchés
            </Text>
            <FlashList
              data={data?.items}
              renderItem={({ item, index }) => (
                <TLCCard
                  key={index}
                  {...{ item }}
                />
              )}
              estimatedItemSize={146}
            />
          </Box>
        </ScrollView>
      </SafeAreaView>
    </Box>
  )
}