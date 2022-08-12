import { Container, Typography, Box, TextField, Select, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(8,0,6)
    },
    boxContainer: {
        paddingBottom: theme.spacing(3),
    },
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3),
    },
}))

const Publish = () => {
    const classes = useStyles()

    return (
        <TemplateDefault>
            <Container maxWidth="sm" className={classes.container}>
                <Typography component="h1"  
                    variant="h2" align="center" color="primary">
                    Publicar anúncio
                </Typography>
                <Typography component="h5"  
                    variant="h5" align="center" color="primary">
                    Quanto mais detalhado, melhor!
                </Typography>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                    <Typography component="h6"  
                        variant="h6"  color="primary">
                        Título do anúncio
                    </Typography>
                    <TextField
                        label="ex.: Bicicleta aro 18 com garantia"
                        size="small"
                        fullWidth
                    />
                    <br /><br />
                    <Typography component="h6" variant="h6" color="primary">
                        Categoria
                    </Typography>
                    <Select 
                        native
                        value=""
                        fullWidth
                        onChange= {() => {}}
                        inputProps={{
                            name: 'age',
                        }}
                    >
                        <option value="">Selecione</option>
                        <option value={1}>Bebê e Criança</option>
                        <option value={2}>Agrilcultura</option>
                        <option value={3}>Moda</option>
                        <option value={3}>Carros, Motos e Barcos</option>
                        <option value={3}>Serviços</option>
                        <option value={3}>Lazer</option>
                        <option value={3}>Animais</option>
                        <option value={3}>Imóveis</option>
                        <option value={3}>Equipamentos e Ferramentas</option>
                        <option value={3}>Celulares e Tablets</option>
                        <option value={3}>Esporte</option>
                        <option value={3}>Tecnologia</option>
                        <option value={3}>Emprego</option>
                        <option value={3}>Outros</option>
                    </Select>
                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}> 
                    <Typography         
                        component="h6"  
                        variant="h6"  color="primary">
                        Imagens
                    </Typography>
                    <Typography         
                        component="div"  
                        variant="body2"  color="primary">
                        A primeira imagem é a foto principal do seu anúncio.
                    </Typography>
                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}> 
                    <Typography         
                        component="h6"  
                        variant="h6"  color="primary">
                            Descrição
                    </Typography>
                    <Typography         
                        component="div"  
                        variant="body2"  color="primary">
                        Escreva os detalhes do que esta vendendo.
                    </Typography>
                    <TextField 
                        multiline
                        rows={6}
                        variant="outlined"
                        fullWidth 
                    />
                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}> 
                    <Typography         
                        component="h6"  
                        variant="h6"  color="primary" gutterBottom>
                            Dados de contato
                    </Typography>
                    <TextField 
                        label="Nome"
                        variant="outlined"
                        size="small"
                        fullWidth 
                    />
                    <br /><br />
                    <TextField 
                        label="E-mail"
                        variant="outlined"
                        size="small"
                        fullWidth 
                    />
                    <br /><br />
                    <TextField 
                        label="Telefone"
                        variant="outlined"
                        size="small"
                        fullWidth 
                    />
                    <br /><br />
                </Box>
            </Container>
            <Container maxWidth="md" className={classes.boxContainer}>
                <Box textAlign="right">
                    <Button variant="contained" color="primary">
                        Publicar anúncio
                    </Button>
                </Box>
            </Container>
        </TemplateDefault>
        
    )
}

export default Publish