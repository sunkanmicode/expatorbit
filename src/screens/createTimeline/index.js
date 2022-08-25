import React from 'react'
import { Text, View } from 'react-native'
import CreateTimelineComp from '../../conponent/CreateTimelineComp'
import FilePicker from 'react-native-document-picker'

const CreateTimeline = () => {
  const [fileSelected, setFileSelected] = React.useState([])

  const handleFilePicker = async ()=>{
    try {
      const response = await FilePicker.pick({
        presentationStyle:'fullScreen',
        allowMultiSelection: true
      })
      setFileSelected(response)
      // console.log(response, '77979779');
    } catch (error) {
      console.log(error)
      
    }
  }



  return (
    <CreateTimelineComp handleFilePicker={handleFilePicker} fileSelected={fileSelected}/>
  );
}

export default CreateTimeline