import React, {useEffect, useState} from "react";
import {
    AddTagButton, CloseIcon,
    Container, DoneButton, EscapeButton,
    InfoGetWrapper,
    InfoInput,
    InfoInputName, InfoSelectType, SaveExerciseIcon, SendIcon,
    TagList, TagListElement, TagListElementButton,
    Wrapper
} from "./AddExerciseColumnElements";

export default ({mode, display, setExercise}) => {

    const [inputInfo, setInputInfo] = useState({name: "", description: "", links: "", tags: [], type: "ciężar"});
    const [tags, setTags] = useState([]);
    const [tagInfo, setTagInfo] = useState("")
    function typing(e){
        setInputInfo({
            ...inputInfo,
            [e.target.name]: e.target.value
        })
    }

    function selectChange(e){
        setInputInfo({...inputInfo, type: e.target.value})
    }

    function tagAdd(){
        setInputInfo({...inputInfo, tags: [...inputInfo.tags, tagInfo]})
        setTagInfo("");
    }

    function typingTag(e){
        setTagInfo(e.target.value)
    }

    function deleteTag(e){
        let array = inputInfo.tags;
        array.splice(e.target.name, 1)
        setInputInfo({...inputInfo, tags: [...array]})
    }

    function addExercinseToBase(){
        setExercise(inputInfo)
        setInputInfo({name: "", description: "", links: "", type: "ciężar", tags: []})
        setTags([]);
        setTagInfo("");
    }


    useEffect(() => {
        if (mode !== false){
            setInputInfo({...mode})
        }
    },[])


    return (
        <>
            <Container >
                <Wrapper>
                    <EscapeButton onClick={()=> display("basic")}><CloseIcon/></EscapeButton>
                    <DoneButton onClick={addExercinseToBase} ><SaveExerciseIcon/></DoneButton>
                    <InfoGetWrapper>
                        <InfoInputName>Nazwa Ćwiczenia</InfoInputName>
                        <InfoInput onChange={(e) => typing(e)} name="name" value={inputInfo.name}/>
                    </InfoGetWrapper>
                    <InfoGetWrapper>
                        <InfoInputName>Opis</InfoInputName>
                        <InfoInput onChange={(e) => typing(e)} type="text"  name="description" value={inputInfo.description}/>
                    </InfoGetWrapper>
                    <InfoGetWrapper>
                        <InfoInputName>Linki</InfoInputName>
                        <InfoInput onChange={(e) => typing(e)} name="links" value={inputInfo.links}/>
                    </InfoGetWrapper>
                    <InfoGetWrapper>
                        <InfoInputName>Typ</InfoInputName>
                        <InfoSelectType value={inputInfo.type} onChange={(e)=> selectChange(e)}>
                            <option value="ciężar">Ćwiczenie z ciężarem np. lawka</option>
                            <option value="hantle">Ćwiczenie z hantlami</option>
                            <option value="brama">Ćwiczenie na bramie</option>
                            <option value="cialo">Ćwiczenie bez ciężaru np. pompki</option>
                        </InfoSelectType>
                    </InfoGetWrapper>
                    <InfoGetWrapper>
                        <InfoInputName>Tagi</InfoInputName>
                        <InfoInput onChange={(e) => typingTag(e)} value={tagInfo}/>
                        <AddTagButton onClick={tagAdd}><SendIcon/></AddTagButton>
                    </InfoGetWrapper>
                </Wrapper>
                <TagList>
                    {inputInfo.tags.map( (el, elin) => {
                        return (
                            <TagListElement key={elin}>{el}<TagListElementButton name={elin} onClick={(e) => deleteTag(e)} >x</TagListElementButton></TagListElement>
                        )
                    })}
                </TagList>
            </Container>
        </>
    )
}