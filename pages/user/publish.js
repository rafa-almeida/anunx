import { useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'

import {
    Container,
    Typography,
    Box,
    Select,
    Button,
    IconButton, 
    FormControl,
    InputLabel,
    
    InputAdornment,
    MenuItem,
    FormHelperText,
    Input,
} from '@material-ui/core'

import { useDropzone } from 'react-dropzone'
import { makeStyles } from '@material-ui/core/styles'
import { DeleteForever } from '@material-ui/icons'

import TemplateDefault from '../../src/templates/Default'


const useStyles = makeStyles((theme) => ({
    mask: {},
    mainImage: {},
    boxContainer: {
        paddingBottom: theme.spacing(3),
    },
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3),
    },
    thumbsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 15,
    },
    dropzone: {
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 10,
        width: 200,
        height: 150,
        margin: '0 15px 15px 0',
        backgroundColor: theme.palette.background.default,
        border: '2px dashed black'
    },
    thumb: {
        position: 'relative',
        width: 200,
        height: 150,
        backgroundSize: 'cover',
        margin: '0 15px 15px 0',
        backgroundPosition: 'center center',

        '& $mainImage': {
            backgroundColor: 'blue',
            padding: '3px 10px',
            position: 'absolute',
            bottom: 0,
            left: 0,
        },

        '&:hover $mask': {
            display: 'flex',
        },
        
        '& $mask': {
            display:'none',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            width: '100%',
            height: '100%'
        }
    },
    inputLabel: {
        fontWeight: 400,
        color: theme.palette.primary.main
    }


}))

const validationSchema = yup.object().shape({
    title: yup.string()
        .min(6, 'Escreva um t??tulo maior')
        .max(100, 'Limite de caracteres excedido')
        .required('Campo obrigat??rio'),
    category: yup.string().required('Campo Obrigat??rio'),
    description: yup.string()
    .min(50, 'Escreva uma descri????o com no m??nimo 50 caracteres.')
    .required('Campo obrigat??rio'),
    price: yup.number().required('Campo Obrigat??rio'),
    email: yup.string().email('Digite um email v??lido').required('Campo obrigat??rio'),
    name: yup.string().required('Campo Obrigat??rio'),
    phone: yup.number().required('Campo Obrigat??rio'),  
    files: yup.array().min(1, 'Envie pelo menos uma foto').required('Campo Obrigat??rio'),
})

const Publish = () => {
    const classes = useStyles()

    return (
        <TemplateDefault>
            <Formik 
                initialValues={{
                    title: '',
                    category: '',
                    description: '',
                    price: '',
                    email: '',
                    name: '',
                    phone: '',
                    files: [],
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log('ok, enviou o form', values)
                }}
            >
                {
                    ({
                        touched,
                        values,
                        errors,
                        handleChange,
                        handleSubmit,
                        setFieldValue,
                    }) => {

                        
                        const { getRootProps, getInputProps } = useDropzone ({
                            accept: 'image/*',
                            onDrop: (acceptedFile) => {
                                const newFiles = acceptedFile.map(file => {
                                    return Object.assign(file, {
                                        preview: URL.createObjectURL(file)
                                    })
                                })

                                setFieldValue('files', [
                                    ...values.files,
                                    ...newFiles
                                ])
                            }   
                        })
    
                        const handleRemoveFile = fileName => {
                            const newFileState = values.files.filter(file => file.name !== fileName)
                            setFieldValue('files', newFileState)
                        }

                        return (
                            <form onSubmit={handleSubmit}>
                                <Container maxWidth="sm">
                                    <Typography component="h1"  
                                        variant="h2" align="center" color="primary">
                                        Publicar an??ncio
                                    </Typography>
                                    <Typography component="h5"  
                                        variant="h5" align="center" color="primary">
                                        Quanto mais detalhado, melhor!
                                    </Typography>                                    
                                </Container>

                                <br/><br/>

                                <Container maxWidth="md" className={classes.boxContainer}>
                                    <Box className={classes.box}>

                                        <FormControl error= {errors.title && touched.title} fullWidth>
                                            <InputLabel className={classes.inputLabel}>T??tulo do an??ncio</InputLabel>
                                            <Input
                                                name="title"
                                                value={values.title}
                                                onChange={handleChange}
                                                label="ex.: Bicicleta aro 18 com garantia"
                                            />
                                            <FormHelperText>
                                                { errors.title && touched.title ? errors.title : null }
                                            </FormHelperText>
                                        </FormControl>
                                        <br /><br />

                                        <FormControl error= {errors.category} fullWidth>
                                            <InputLabel className={classes.inputLabel}>Categoria</InputLabel>  
                                            <Select 
                                                name="category"
                                                value= {values.category}
                                                fullWidth
                                                onChange= {handleChange}
                                                                                        
                                            >
                                                <MenuItem value="Beb?? e Crian??a">Beb?? e Crian??a</MenuItem>
                                                <MenuItem value="Agricultura">Agricultura</MenuItem>
                                                <MenuItem value="Moda">Moda</MenuItem>
                                                <MenuItem value="Carros, Motos e Barcos">Carros, Motos e Barcos</MenuItem>
                                                <MenuItem value="Servi??os">Servi??os</MenuItem>
                                                <MenuItem value="Lazer">Lazer</MenuItem>
                                                <MenuItem value="Animais">Animais</MenuItem>
                                                <MenuItem value="Im??veis">Im??veis</MenuItem>
                                                <MenuItem value="Equipamentos e Ferramentas">Equipamentos e Ferramentas</MenuItem>
                                                <MenuItem value="Celulares e Tablets">Celulares e Tablets</MenuItem>
                                                <MenuItem value="Esporte">Esporte</MenuItem>
                                                <MenuItem value="Tecnologia">Tecnologia</MenuItem>
                                                <MenuItem value="Empregos">Empregos</MenuItem>
                                                <MenuItem value="Outros">Outros</MenuItem>
                                            </Select>
                                            <FormHelperText>
                                                { errors.title && touched.category ? errors.category : null }
                                            </FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Container>

                                <Container maxWidth="md" className={classes.boxContainer}>
                                    <Box className={classes.box}> 
                                        <Typography         
                                            component="h6"  
                                            variant="h6"  color={errors.files ? 'error' :"textPrimary"}>
                                            Imagens
                                        </Typography>
                                        <Typography         
                                            component="div"  
                                            variant="body2"  color={errors.files ? 'error' :"textPrimary"}>
                                            A primeira imagem ?? a foto principal do seu an??ncio.
                                        </Typography>
                                        {
                                            errors.files && touched.files
                                                ? <Typography variant="body2" color="error" gutterBottom>{errors.files}</Typography>
                                                : null
                                        }
                                        <Box className={classes.
                                            thumbsContainer}>
                                            <Box className=
                                                {classes.dropzone} {...getRootProps()}>
                                                <input name="files" {...getInputProps()} />                            
                                                <Typography variant="body2" color={errors.files ? 'error' :"textPrimary"}>
                                                    Clique para adicionar ou arraste a imagem at?? aqui.
                                                </Typography>
                                            </Box>

                                            {
                                                values.files.map((file,index) => (
                                                    <Box 
                                                        key={file.name}
                                                        className={classes.thumb} style={{ backgroundImage: `url(${file.preview})`}}
                                                    >
                                                        {
                                                            index === 0 ?
                                                                <Box className={classes.mainImage}>
                                                                    <Typography variant="body" color="secondary">
                                                                        Principal
                                                                    </Typography>
                                                                </Box>
                                                            :null
                                                        } 
                                                        <Box className={classes.mask}>
                                                            <IconButton color="secondary" onClick={() => handleRemoveFile(file.name)}>
                                                                <DeleteForever fontSize="large" />                                  
                                                            </IconButton>
                                                        </Box>
                                                    </Box>
                                                ))
                                            }
                                            
                                        </Box>
                                    </Box>
                                </Container>

                                <Container maxWidth="md" className={classes.boxContainer}>
                                    <Box className={classes.box}> 
                                        
                                        <FormControl error= {errors.description} fullWidth>
                                            <InputLabel className={classes.inputLabel}>Escreva os detalhes do que esta vendendo.</InputLabel>
                                            <Input 
                                                name="description"
                                                multiline
                                                rows={6}
                                                variant="outlined"
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.description && touched.description ? errors.description : null}
                                            </FormHelperText>
                                        </FormControl>
                                    </Box>
                                </Container>

                                <Container maxWidth="md" className={classes.boxContainer}>
                                    <Box className={classes.box}> 
                                        <FormControl error= {errors.price} fullWidth>
                                            <InputLabel className={classes.inputLabel}>Pre??o de venda</InputLabel>
                                            <Input 
                                                name="price"                                            
                                                variant="outlined"
                                                onChange={handleChange}
                                                startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                                            />
                                            <FormHelperText>
                                                {errors.price && touched.price ? errors.price : null}
                                            </FormHelperText>
                                        </FormControl>                                                 
                                    </Box>
                                </Container>

                                <Container maxWidth="md" className={classes.boxContainer}>
                                    <Box className={classes.box}> 
                                        <Typography         
                                            component="h6"  
                                            variant="h6"  color="primary" gutterBottom>
                                                Dados de contato
                                        </Typography>

                                        <FormControl error= {errors.name} fullWidth>
                                            <InputLabel className={classes.inputLabel}>Nome</InputLabel>
                                            <Input
                                                name="name"
                                                value={values.name}
                                                onChange={handleChange}                                                
                                            />
                                            <FormHelperText>
                                                { errors.name && touched.name ? errors.name : null }
                                            </FormHelperText>
                                        </FormControl>
                                        <br /><br />

                                        <FormControl error= {errors.email} fullWidth>
                                            <InputLabel className={classes.inputLabel}>E-mail</InputLabel>
                                            <Input
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}                                                
                                            />
                                            <FormHelperText>
                                                { errors.email }
                                            </FormHelperText>
                                        </FormControl>
                                        <br /><br />

                                        <FormControl error= {errors.phone} fullWidth>
                                            <InputLabel className={classes.inputLabel}>Telefone</InputLabel>
                                            <Input
                                                name="phone"
                                                value={values.phone}
                                                onChange={handleChange}                                                
                                            />
                                            <FormHelperText>
                                                { errors.phone }
                                            </FormHelperText>
                                        </FormControl>
                                        <br /><br />
                                    </Box>
                                </Container>
                                <Container maxWidth="md" className={classes.boxContainer}>
                                    <Box textAlign="right">
                                        <Button type="submit" variant="contained" color="primary">
                                            Publicar an??ncio
                                        </Button>
                                    </Box>
                                </Container>
                            </form>
                        )
                    }
                }
            </Formik>

            
        </TemplateDefault>
        
    )
}

export default Publish