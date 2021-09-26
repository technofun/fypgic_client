import React, { useState, useRef } from 'react'
import { Container, Card, CardContent, makeStyles, Grid, TextField, Button } from '@material-ui/core';
import QRCode from 'qrcode';
import QrReader from 'react-qr-reader';

export const ScanStudent = () => {
    // const classes = useStyles();
    const qrRef = useRef(null);
    const [text, setText] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [scanResultFile, setScanResultFile] = useState('');
    const [scanResultWebCam, setScanResultWebCam] = useState('');

    const handleErrorWebCam = (error) => {
        console.log(error);
    }
    const handleScanWebCam = (result) => {
        if (result) {
            setScanResultWebCam(result);
        }
    }
    return (
        <>
            <Grid item xl={4} lg={2} md={2} sm={4} xs={12}>
                <QrReader
                    delay={200}
                    style={{ width: '100%' }}
                    onError={handleErrorWebCam}
                    onScan={handleScanWebCam}
                />
            </Grid>
        </>
    );
}
