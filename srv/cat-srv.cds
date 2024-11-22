using { inbdlv } from '../db/cat-db';

service DlvHeader {
    @readonly entity DlvHeader as projection on inbdlv.DlvHeader;
}