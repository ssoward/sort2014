package com.ssoward.controller;

import com.ssoward.model.Users;
import com.ssoward.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by ssoward on 9/24/14.
 */

@Controller
@RequestMapping("/rappel")
public class RappelController {
    static Boolean isHarness = false;
    static Boolean isRopeShrubAnchor = false;
    static Boolean isRopeHarnessAnchor = false;

    @RequestMapping(method = RequestMethod.GET, value="/test", produces = MediaType.APPLICATION_JSON_VALUE)
    public void oldSchoolAjax(HttpServletRequest request, HttpServletResponse response, @RequestParam String  val) {
        try {
            Thread.sleep(500l);
            response.getWriter().print("Returned from server at "+ new Date());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @RequestMapping(method = RequestMethod.GET, value="/status", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<String> getRappel() {
        Map<String, Object> rappel = new HashMap<String, Object>();
        rappel.put("harness", this.isHarness);
        rappel.put("harnessRope", this.isRopeHarnessAnchor);
        rappel.put("anchorRope", this.isRopeShrubAnchor);
        return new ResponseEntity(rappel, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.GET, value="/on", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<String> rappelOn() {
        Boolean rappelOn = (isHarness && isRopeHarnessAnchor && isRopeShrubAnchor);
        Map<String, Object> rappel = new HashMap<String, Object>();
        rappel.put("rappelOn", rappelOn);
        return new ResponseEntity(rappel, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.PUT, value="/harness", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<String> toggleHarness(@RequestParam(value = "onOff") Boolean onOff) {
        this.isHarness = onOff;
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.PUT, value="/anchor/shrub", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<String> anchorShrubOnOff(@RequestParam(value = "onOff") Boolean onOff) {
        this.isRopeShrubAnchor = onOff;
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.PUT, value="/anchor/harness", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<String> anchorHarnessOnOff(@RequestParam(value = "onOff") Boolean onOff) {
        this.isRopeHarnessAnchor = onOff;
        return new ResponseEntity(HttpStatus.OK);
    }
}
