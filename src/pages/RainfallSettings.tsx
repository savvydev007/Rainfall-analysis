import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Select, { SingleValue } from "react-select";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import "rc-time-picker/assets/index.css";
import { Moment } from "moment";
import DatePicker, { DayValue } from 'react-modern-calendar-datepicker'
import TimePicker from "rc-time-picker";
import { ISetSettingPayload, SelectOptionProps } from "types";
import { date2str } from "helpers/utils";
import { useSetSettings } from "hooks";

const siteOpts: SelectOptionProps[] = [
    { value: 'demo', label: 'Demo Rainfall CA' },
    { value: 'others', label: '...' },
];

const chnlOpts: SelectOptionProps[] = [
    { value: 'rainfall', label: 'Rainfall' },
    { value: 'others', label: '...' },
];

const crveOpts: SelectOptionProps[] = [
    { value: 'demo', label: 'Demo Rainfall' },
    { value: 'others', label: '...' },
];


const RainfallSettings = () => {
    const [siteSelected, setSiteSelection] = useState<SingleValue<SelectOptionProps>>(siteOpts[0]);

    const [chnlSelected, setChnlSelection] = useState<SingleValue<SelectOptionProps>>(chnlOpts[0]);

    const [crveSelected, setCrveSelection] = useState<SingleValue<SelectOptionProps>>(crveOpts[0]);

    const [endDate, setEndDate] = useState<DayValue>(null);
    const [startDate, setStartDate] = useState<DayValue>(null);
    const [startTime, setStartTime] = useState<Moment | undefined>(undefined);
    const [endTime, setEndTime] = useState<Moment | undefined>(undefined);
    const setSettings = useSetSettings();

    const handleReset = () => {
        setSiteSelection(siteOpts[0]);
        setChnlSelection(chnlOpts[0]);
        setCrveSelection(crveOpts[0]);
        setStartDate(null);
        setEndDate(null);
        setStartTime(undefined);
        setEndTime(undefined);
    }

    const handleGen = () => {
        let payload: ISetSettingPayload = {
            site: siteSelected?.value,
            channel: chnlSelected?.value,
            curve: crveSelected?.value,
            startDate: startDate?.year + "/" + startDate?.month + "/" + startDate?.day,
            endDate: endDate?.year + "/" + endDate?.month + "/" + endDate?.day,
            startTime: startTime?.format("HH:mm"),
            endTime: endTime?.format("HH:mm"),
        }

        // setSettings.mutate(payload);
    }

    return (
        <div className="px-5">
            <div className="d-flex flex-column">
                <h2 className="py-3">Rainfall Settings</h2>
                <div className="d-flex flex-column gap-2" >
                    <Row>
                        <Col sm={2} className="d-flex align-items-center justify-content-end">
                            SELECT A RAINFALL SITE:
                        </Col>
                        <Col sm={10}>
                            <Select
                                options={siteOpts}
                                value={siteSelected}
                                defaultValue={siteSelected}
                                onChange={setSiteSelection}
                                className="zIndex-103"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col
                            sm={2}
                            className="d-flex align-items-center justify-content-end"
                        >
                            SELECT A RAINFALL CHANNEL:
                        </Col>
                        <Col sm={10}>
                            <Select
                                options={chnlOpts}
                                value={chnlSelected}
                                defaultValue={chnlSelected}
                                onChange={setChnlSelection}
                                className="zIndex-102"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col
                            sm={2}
                            className="d-flex align-items-center justify-content-end"
                        >
                            SELECT AN IDF CURVE:
                        </Col>
                        <Col sm={10}>
                            <Select
                                options={crveOpts}
                                value={crveSelected}
                                defaultValue={crveSelected}
                                onChange={setCrveSelection}
                                className="zIndex-101"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col
                            sm={2}
                            className="d-flex align-items-center justify-content-end"
                        >
                            SELECT START DATE:
                        </Col>
                        <Col sm={10}>
                            <DatePicker
                                wrapperClassName="w-100"
                                inputClassName="w-100 text-start datepicker"
                                inputPlaceholder="Select Start Date"
                                calendarPopperPosition="bottom"
                                value={startDate}
                                onChange={setStartDate} />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <label className="me-1">Optional:</label>
                            <TimePicker
                                showSecond={false}
                                allowEmpty={true}
                                value={startTime}
                                onChange={setStartTime}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2} className="d-flex align-items-center justify-content-end">
                            SELECT END DATE:
                        </Col>
                        <Col sm={10}>
                            <DatePicker
                                wrapperClassName="w-100 zIndex-99"
                                inputClassName="w-100 text-start datepicker"
                                inputPlaceholder="Select End Date"
                                calendarPopperPosition="bottom"
                                value={endDate}
                                onChange={setEndDate} />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <label>Optional:</label>
                            <TimePicker
                                showSecond={false}
                                allowEmpty={true}
                                value={endTime}
                                onChange={setEndTime}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Link to="/chart-view">
                                <Button onClick={handleGen} className="me-2 outline-gray">
                                    GENERATE IDF ANAYSIS
                                </Button>
                            </Link>
                            <Button className="outline-gray"
                                onClick={handleReset}
                            >RESET</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </div >
    );
};

export default RainfallSettings;